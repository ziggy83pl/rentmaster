const CACHE_NAME = 'rentmaster-v7';

// Pliki krytyczne - bez nich strona nie działa
const ASSETS_CRITICAL = [
    '/',
    '/index.html',
    '/style.css',
    '/opisy.js',
    '/manifest.json',
    '/image/logo/favicon-32x32.png',
    '/image/logo/icon-192.png',
    '/image/logo/icon-512.png'
];

// Pliki opcjonalne - próbujemy cache'ować, ale błąd nie zatrzyma instalacji
const ASSETS_OPTIONAL = [
    '/data.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            // Najpierw cache'uj pliki krytyczne - jeśli to się nie uda, SW nie zainstaluje się
            await cache.addAll(ASSETS_CRITICAL);

            // Opcjonalne pliki cache'uj pojedynczo - błąd nie blokuje instalacji
            for (const asset of ASSETS_OPTIONAL) {
                try {
                    await cache.add(asset);
                } catch (err) {
                    console.warn('Nie udało się zcache\'ować (opcjonalne):', asset, err);
                }
            }
        })
        .then(() => self.skipWaiting()) // Nowy SW przejmuje kontrolę natychmiast
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => self.clients.claim()) // Przejmij kontrolę nad otwartymi kartami
    );
});

self.addEventListener('fetch', (event) => {
    // Pomijaj żądania inne niż GET
    if (event.request.method !== 'GET') return;

    // Pomijaj zewnętrzne zasoby (Google Analytics, CDN itp.)
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    // Strategia Network First dla data.js (zawsze świeże dane gdy jest internet)
    if (event.request.url.includes('data.js')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    if (response && response.status === 200) {
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Cache First dla pozostałych zasobów
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                if (
                    networkResponse &&
                    networkResponse.status === 200 &&
                    (networkResponse.type === 'basic' || networkResponse.type === 'cors')
                ) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Fallback dla nawigacji - zwróć główną stronę z cache
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
});

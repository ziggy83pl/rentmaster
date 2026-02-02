let aktualnaGaleria = [];
let aktualnyIndeks = 0;
let aktualnyZoom = 1;

function generateListingCard(data) {
    // Generuje listę parametrów (np. metraż, pokoje)
    const paramsHTML = data.params && data.params.length > 0 
        ? `<p class="params">${data.params.map(p => `<i class="fas ${p.icon}"></i> ${p.text}`).join(' | ')}</p>` 
        : '';

    // Generuje cenę, jeśli istnieje
    const priceHTML = data.price 
        ? `<div class="price">${data.price.value} zł <span>${data.price.unit}</span></div>` 
        : '';

    // Generuje datę dostępności
    const availabilityHTML = data.availabilityDate 
        ? `<div class="availability"><i class="far fa-calendar-alt"></i> Dostępne: ${data.availabilityDate}</div>` 
        : '';

    // Dodaje specjalny styl dla obrazka, jeśli zdefiniowany
    const imageStyle = data.imageStyle === 'contain' 
        ? `background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #222;` 
        : '';

    // Generuje badge "WYNAJĘTE" jeśli flaga isRented jest ustawiona na true
    const rentedHTML = data.isRented 
        ? `<div class="rented-overlay"><div class="rented-text">WYNAJĘTE</div></div>` 
        : '';

    // Generuje badge "OKAZJA"
    const bargainBadge = data.isBargain 
        ? `<span class="badge-bargain">OKAZJA</span>` 
        : '';

    // Ustawienie zdjęcia głównego lub fallback (nopicture.png)
    const bgImage = data.mainImage ? data.mainImage : 'image/logo/nopicture.png';

    return `
        <div class="property-card ${data.isBargain ? 'bargain-card' : ''}" id="oferta-${data.id}" data-city="${data.city}" data-type="${data.type}">
            <div class="property-img" style="background-image: url('${bgImage}'); ${imageStyle}" onclick="otworzGalerie('${data.id}')">
                <span class="badge">${data.badge}</span>
                ${bargainBadge}
                ${rentedHTML}
                ${data.gallery && data.gallery.length > 0 ? '<div class="gallery-overlay"><i class="fas fa-camera"></i> Kliknij, aby zobaczyć galerię</div>' : ''}
            </div>
            <div class="property-content">
                <h3>${data.title}</h3>
                ${paramsHTML}
                ${priceHTML}
                ${availabilityHTML}
                <div class="buttons-container">
                    <button class="btn-view" onclick="pokazOpis('${data.id}', this)">Zobacz szczegóły</button>
                    <a href="tel:+48574322909" class="btn-call" title="Zadzwoń"><i class="fas fa-phone"></i></a>
                    <button class="btn-share" onclick="udostepnij('${data.id}')" title="Kopiuj link do ogłoszenia"><i class="fas fa-share-alt"></i></button>
                </div>
                <div id="opis-${data.id}" class="opis-animacja" style="color: #444; font-size: 0.95rem; line-height: 1.5;"></div>
            </div>
        </div>
    `;
}

function pokazOpis(listingId, przycisk) {
    const kontener = document.getElementById('opis-' + listingId);
    if (!kontener) return;

    const czyOtwarte = kontener.classList.contains('otwarte');

    if (!czyOtwarte) {
        const listing = listingsData.find(l => l.id === listingId);
        if (!listing) return;

        kontener.innerHTML = listing.description || "Brak opisu.";
        kontener.classList.add('otwarte');
        kontener.style.maxHeight = kontener.scrollHeight + "px";

        if (przycisk) {
            przycisk.innerText = "Ukryj szczegóły";
            przycisk.style.backgroundColor = "#e74c3c";
            przycisk.style.color = "white";
            przycisk.style.borderColor = "#e74c3c";

            setTimeout(() => {
                const card = przycisk.closest('.property-card');
                if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    } else {
        kontener.style.maxHeight = null;
        kontener.classList.remove('otwarte');

        if (przycisk) {
            przycisk.innerText = "Zobacz szczegóły";
            przycisk.style.backgroundColor = "";
            przycisk.style.color = "";
            przycisk.style.borderColor = "";
        }
    }
}

function otworzGalerie(listingId) {
    const listing = listingsData.find(l => l.id === listingId);
    if (!listing || !listing.gallery || listing.gallery.length === 0) return;

    aktualnaGaleria = listing.gallery;
    aktualnyIndeks = 0;
    aktualnyZoom = 1;
    zaktualizujLightbox();
    document.getElementById('lightbox').style.display = 'flex';
}

function zamknijGalerie() {
    document.getElementById('lightbox').style.display = 'none';
}

function zmienZdjecie(kierunek) {
    aktualnyIndeks += kierunek;
    if (aktualnyIndeks < 0) aktualnyIndeks = aktualnaGaleria.length - 1;
    if (aktualnyIndeks >= aktualnaGaleria.length) aktualnyIndeks = 0;
    aktualnyZoom = 1;
    zaktualizujLightbox();
}

function zaktualizujLightbox() {
    const img = document.getElementById('lightbox-img');
    img.onerror = function() {
        this.src = 'image/logo/nopicture.png';
    };
    img.src = aktualnaGaleria[aktualnyIndeks];
    img.style.transform = `scale(${aktualnyZoom})`;
}

function zmienZoom(zmiana) {
    aktualnyZoom += zmiana;
    if (aktualnyZoom < 0.5) aktualnyZoom = 0.5;
    if (aktualnyZoom > 3.0) aktualnyZoom = 3.0;
    document.getElementById('lightbox-img').style.transform = `scale(${aktualnyZoom})`;
}

function filtrujOgloszenia() {
    const wybraneMiasto = document.getElementById('city').value;
    const wybranyTyp = document.getElementById('type').value;
    const karty = document.querySelectorAll('.property-card');
    let znaleziono = false;

    karty.forEach(karta => {
        const miastoKarty = karta.getAttribute('data-city');
        const typKarty = karta.getAttribute('data-type');
        const zgodneMiasto = (wybraneMiasto === 'all' || wybraneMiasto === miastoKarty);
        const zgodnyTyp = (wybranyTyp === 'all' || wybranyTyp === typKarty);

        if (zgodneMiasto && zgodnyTyp) {
            karta.style.display = 'block';
            znaleziono = true;
        } else {
            karta.style.display = 'none';
        }
    });

    const komunikat = document.getElementById('no-results');
    if (komunikat) komunikat.style.display = znaleziono ? 'none' : 'block';
}
//Formularz kontaktowy - wysyłka AJAX i walidacja
function wyslijFormularz(event) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    const telefonInput = form.querySelector('input[name="telefon"]');
    const telefon = telefonInput.value.replace(/\D/g, '');

    if (telefon.length !== 9) {
        alert("Numer telefonu musi składać się dokładnie z 9 cyfr.");
        return;
    }

    btn.innerText = 'Wysyłanie...';
    btn.disabled = true;
    const wrapper = document.querySelector('.contact-form-wrapper');

    fetch("https://formsubmit.co/ajax/zbyszekszczesny83@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            imie: form.querySelector('input[name="imie"]').value,
            telefon: form.querySelector('input[name="telefon"]').value,
            email: form.querySelector('input[name="email"]').value,
            wiadomosc: form.querySelector('textarea[name="wiadomosc"]').value,
            _subject: "---> Nowe zapytanie od RentMaster <---",
            _captcha: "false",
            _autoresponse: "Dziękujemy za wiadomość! Otrzymaliśmy Twoje zgłoszenie i skontaktujemy się z Tobą wkrótce."
        })
    })
    .then(response => {
        if (response.ok) {
            const originalChildren = Array.from(wrapper.children);
            originalChildren.forEach(child => child.style.display = 'none');

            const successDiv = document.createElement('div');
            successDiv.className = 'form-success';
            successDiv.innerHTML = `
                <i class="fas fa-check-circle" style="font-size: 3rem; color: #2ecc71; margin-bottom: 20px;"></i>
                <h3>Dziękujemy za wiadomość!</h3>
                <p>Skontaktujemy się z Tobą.</p>
                <button type="button" id="new-message-btn" class="btn-main" style="margin-top: 20px;">Wyślij kolejną wiadomość</button>
            `;
            wrapper.appendChild(successDiv);

            document.getElementById('new-message-btn').addEventListener('click', () => {
                successDiv.remove();
                originalChildren.forEach(child => child.style.display = '');
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            });
        } else {
            alert("Wystąpił problem z wysłaniem formularza. Spróbuj ponownie później.");
            throw new Error('Błąd wysyłki');
        }
    }).catch(error => {
        alert("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.");
        btn.innerText = originalText;
        btn.disabled = false;
    });
}

function formatujTelefon(input) {
    let numer = input.value.replace(/\D/g, '');
    numer = numer.substring(0, 9);

    if (numer.length > 6) {
        input.value = numer.substring(0, 3) + ' ' + numer.substring(3, 6) + ' ' + numer.substring(6);
    } else if (numer.length > 3) {
        input.value = numer.substring(0, 3) + ' ' + numer.substring(3);
    } else {
        input.value = numer;
    }
}

const mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function udostepnij(listingId) {
    const listing = listingsData.find(l => l.id === listingId);
    let url;

    // Sprawdź czy oferta ma dedykowany plik do udostępniania (dla Facebooka)
    if (listing && listing.shareLink) {
        const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
        url = baseUrl + listing.shareLink;
    } else {
        url = window.location.origin + window.location.pathname + '#oferta-' + listingId;
    }

    if (navigator.share) {
        navigator.share({
            title: 'RentMaster - Oferta',
            text: 'Sprawdź to ogłoszenie wynajmu:',
            url: url
        }).catch(err => console.log('Udostępnianie anulowane lub błąd:', err));
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert("Link do ogłoszenia został skopiowany do schowka!\nMożesz go teraz wkleić w SMS lub na Facebooku.");
        }).catch(err => {
            console.error('Błąd kopiowania: ', err);
            alert("Nie udało się skopiować linku automatycznie.");
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const propertyGrid = document.querySelector('.property-grid');
    if (!propertyGrid) return;

    // Generowanie kart ogłoszeń
    if (typeof listingsData !== 'undefined' && Array.isArray(listingsData)) {
        listingsData.forEach(listing => {
            if (listing.enabled) {
                propertyGrid.innerHTML += generateListingCard(listing);
            }
        });
    }

    // Uruchom filtrowanie na starcie, aby obsłużyć brak wyników lub domyślne filtry
    filtrujOgloszenia();

    // Ustaw odpowiednią ikonę w wyszukiwarce na starcie
    const typeSelect = document.getElementById('type');
    if (typeSelect) zmienIkoneTypu(typeSelect);

    // Otwieranie ogłoszenia z linku (hash)
    if (window.location.hash && window.location.hash.startsWith('#oferta-')) {
        const listingId = window.location.hash.substring(8); // #oferta- -> 8 znaków
        const card = document.getElementById('oferta-' + listingId);
        if (card) {
            const btn = card.querySelector('.btn-view');
            if (btn) pokazOpis(listingId, btn);
        }
    }
});

const lightbox = document.getElementById('lightbox');
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (event) => {
    // Zapisujemy pozycję końcową dotyku
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (aktualnyZoom > 1) return;
    const swipeThreshold = 50;

    if (touchEndX < touchStartX - swipeThreshold) zmienZdjecie(1);
    if (touchEndX > touchStartX + swipeThreshold) zmienZdjecie(-1);
}

function zmienIkoneTypu(select) {
    const icon = document.getElementById('type-icon');
    if (!icon) return;

    icon.className = 'fas'; // Reset klas, zostawiamy bazową FontAwesome

    switch (select.value) {
        case 'garage': icon.classList.add('fa-warehouse'); break;
        case 'storage': icon.classList.add('fa-boxes'); break;
        case 'apartment': icon.classList.add('fa-building'); break;
        case 'plot': icon.classList.add('fa-layer-group'); break;
        case 'other': icon.classList.add('fa-question-circle'); break;
        default: icon.classList.add('fa-warehouse'); break;
    }
}

// Obsługa PWA (Service Worker i Instalacja)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker zarejestrowany:', reg))
        .catch(err => console.log('Błąd rejestracji Service Worker:', err));
}

let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = 'inline-block';
});

if (installBtn) {
    installBtn.addEventListener('click', (e) => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                deferredPrompt = null;
            });
        }
    });
}

// Obsługa animacji Fade-in (Pojawianie się elementów przy przewijaniu)
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

});

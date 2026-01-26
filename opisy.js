// Tutaj wpisz treść swoich ogłoszeń. Możesz używać znaczników HTML (np. <br> dla nowej linii).
const opisy = {
    "pisz": {
        opis: `
            <strong>Lokalizacja:</strong> Centrum, ul. Jagodna.<br><br>
Garaż/Magazyn do Wynajęcia w Piszu | Bezpieczne Przechowywanie!

Treść Ogłoszenia

Typ: Garaż/Magazyn

Dostępność: Do wynajęcia od zaraz

Przeznaczenie: Idealne do bezpiecznego przechowywania pojazdu (samochód, motocykl) lub jako magazyn na cenne przedmioty, sprzęt budowlany/ogrodniczy, czy meble.

Ochrona Sezonowa: Doskonałe miejsce do zabezpieczenia pojazdu na okres jesienno-zimowy (ochrona przed mrozem, śniegiem i wilgocią).

Czynsz: 225

Kaucja: Wymagana w wysokości 225 zł.
<br><br>
<strong>Lokalizacja na mapie:</strong><br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.432264666068!2d21.80665327706354!3d53.62534865719321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d6308d2545939%3A0x6730103036666666!2sJagodna%2C%2012-200%20Pisz!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" width="100%" height="300" style="border:0; border-radius: 8px; margin-top: 10px; pointer-events: none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<a href="https://www.google.com/maps/dir/?api=1&destination=Jagodna,Pisz" target="_blank" class="btn-navigate"><i class="fas fa-location-arrow"></i> Nawiguj do celu</a>
        `,
        zdjecia: [
            "image/pisz/garaz.jpg",
            "image/pisz/brama.webp",
            "image/pisz/wnetrze.jpg",
            // Dodaj tutaj kolejne zdjęcia z folderu image/pisz, np.:
            // "image/pisz/foto2.jpg",
        ]
    },
    "lomza": {
        opis: `
            <strong>Lokalizacja:</strong> Centrum, ul. Jagodna.<br><br>
Garaż/Magazyn do Wynajęcia w Piszu | Bezpieczne Przechowywanie!

Treść Ogłoszenia

Typ: Garaż/Magazyn

Dostępność: Do wynajęcia od zaraz

Przeznaczenie: Idealne do bezpiecznego przechowywania pojazdu (samochód, motocykl) lub jako magazyn na cenne przedmioty, sprzęt budowlany/ogrodniczy, czy meble.

Ochrona Sezonowa: Doskonałe miejsce do zabezpieczenia pojazdu na okres jesienno-zimowy (ochrona przed mrozem, śniegiem i wilgocią).

Czynsz: 225

Kaucja: Wymagana w wysokości 225 zł.
<br><br>
<strong>Lokalizacja na mapie:</strong><br>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.432264666068!2d21.80665327706354!3d53.62534865719321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d6308d2545939%3A0x6730103036666666!2sJagodna%2C%2012-200%20Pisz!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" width="100%" height="300" style="border:0; border-radius: 8px; margin-top: 10px; pointer-events: none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<a href="https://www.google.com/maps/dir/?api=1&destination=Jagodna,Pisz" target="_blank" class="btn-navigate"><i class="fas fa-location-arrow"></i> Nawiguj do celu</a>
        `,
        zdjecia: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500&auto=format&fit=crop",
            // "image/lomza/foto1.png",
        ]
    },
    "bialystok": {
        opis: `
            <strong>Lokalizacja:</strong> Białystok, Centrum.<br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
        `,
        zdjecia: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop"
        ]
    },
    "ostroleka": {
        opis: `
            <strong>Lokalizacja:</strong> Ostrołęka, Osiedle.<br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
        `,
        zdjecia: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500&auto=format&fit=crop"
        ]
    },
    "lomza-dzialka": {
        opis: `
            <strong>Lokalizacja:</strong> Łomża, okolice Szosy Zambrowskiej.<br><br>
            Do wynajęcia utwardzony plac o powierzchni 500m2. Teren ogrodzony, dostęp do prądu i wody.<br>
            Idealny pod komis samochodowy, skład materiałów budowlanych lub parking dla maszyn.<br><br>
            Dojazd drogą asfaltową.
        `,
        zdjecia: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop"
        ]
    },
    "lomza-mieszkanie": {
        opis: `
            <strong>Lokalizacja:</strong> Łomża, Centrum.<br><br>
            Przestronne mieszkanie 2-pokojowe idealne pod dalszy podnajem (np. dla pracowników lub studentów).<br>
            W pełni umeblowane, oddzielna kuchnia, balkon.<br>
            Możliwość podpisania umowy na dłuższy okres z gwarancją stałej ceny.
        `,
        zdjecia: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&auto=format&fit=crop"
        ]
    }
};

let aktualnaGaleria = [];
let aktualnyIndeks = 0;
let aktualnyZoom = 1;

function pokazOpis(klucz, przycisk) {
    const kontener = document.getElementById('opis-' + klucz);
    if (!kontener) return;

    // Sprawdzamy czy element ma klasę 'otwarte'
    const czyOtwarte = kontener.classList.contains('otwarte');

    if (!czyOtwarte) {
        // Otwieranie
        const dane = opisy[klucz];
        const tresc = (typeof dane === 'object' && dane.opis) ? dane.opis : dane;
        kontener.innerHTML = tresc || "Brak opisu.";
        kontener.classList.add('otwarte');
        // Ustawiamy max-height na rzeczywistą wysokość zawartości
        kontener.style.maxHeight = kontener.scrollHeight + "px";

        if (przycisk) {
            przycisk.innerText = "Ukryj szczegóły";
            przycisk.style.backgroundColor = "#e74c3c"; // Czerwony kolor dla aktywnego przycisku
            przycisk.style.color = "white";
            przycisk.style.borderColor = "#e74c3c";

            // Przewijanie do środka ekranu po rozwinięciu
            setTimeout(() => {
                const card = przycisk.closest('.property-card');
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    } else {
        // Zamykanie
        kontener.style.maxHeight = null; // Resetujemy wysokość do 0 (zdefiniowane w CSS)
        kontener.classList.remove('otwarte');

        if (przycisk) {
            przycisk.innerText = "Zobacz szczegóły";
            przycisk.style.backgroundColor = ""; // Reset do domyślnego stylu CSS
            przycisk.style.color = "";
            przycisk.style.borderColor = "";
        }
    }
}

function otworzGalerie(klucz) {
    const dane = opisy[klucz];
    if (!dane || !dane.zdjecia || dane.zdjecia.length === 0) return;

    aktualnaGaleria = dane.zdjecia;
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
    img.src = aktualnaGaleria[aktualnyIndeks];
    img.style.transform = `scale(${aktualnyZoom})`;
}

function zmienZoom(zmiana) {
    aktualnyZoom += zmiana;
    if (aktualnyZoom < 0.5) aktualnyZoom = 0.5; // Minimalne pomniejszenie
    if (aktualnyZoom > 3.0) aktualnyZoom = 3.0; // Maksymalne powiększenie
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
    if (komunikat) {
        komunikat.style.display = znaleziono ? 'none' : 'block';
    }
}

function wyslijFormularz(event) {
    event.preventDefault(); // Zatrzymuje przeładowanie strony

    const form = event.target;
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    
    // Walidacja numeru telefonu
    const telefonInput = form.querySelector('input[name="telefon"]');
    const telefon = telefonInput.value.replace(/\D/g, ''); // Usuwa spacje, myślniki (zostawia tylko cyfry)

    if (telefon.length !== 9) {
        alert("Numer telefonu musi składać się dokładnie z 9 cyfr.");
        return; // Przerywa wysyłanie formularza
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
            _subject: "Nowe zapytanie RentMaster",
            _autoresponse: "Dziękujemy za wiadomość! Otrzymaliśmy Twoje zgłoszenie i skontaktujemy się z Tobą wkrótce."
        })
    })
    .then(response => {
        if (response.ok) {
            wrapper.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: #2ecc71; margin-bottom: 20px;"></i>
                    <h3 style="color: #1a2a6c;">Dziękujemy za wiadomość!</h3>
                    <p>Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                </div>
            `;
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
    // Usuwamy wszystkie znaki niebędące cyframi
    let numer = input.value.replace(/\D/g, '');
    
    // Ograniczamy do 9 cyfr (standardowy polski numer)
    numer = numer.substring(0, 9);
    
    // Formatujemy: XXX XXX XXX
    if (numer.length > 6) {
        input.value = numer.substring(0, 3) + ' ' + numer.substring(3, 6) + ' ' + numer.substring(6);
    } else if (numer.length > 3) {
        input.value = numer.substring(0, 3) + ' ' + numer.substring(3);
    } else {
        input.value = numer;
    }
}

// Obsługa przycisku "Powrót do góry"
const mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    // Płynne przewijanie dzięki scroll-behavior: smooth w CSS
    document.body.scrollTop = 0; // Dla Safari
    document.documentElement.scrollTop = 0; // Dla Chrome, Firefox, IE i Opera
}

// Funkcja udostępniania (kopiowania linku)
function udostepnij(klucz) {
    // Tworzymy pełny link z kotwicą (hashem) do konkretnego ogłoszenia
    const url = window.location.origin + window.location.pathname + '#oferta-' + klucz;
    
    // Sprawdzamy czy przeglądarka obsługuje Web Share API (głównie telefony)
    if (navigator.share) {
        navigator.share({
            title: 'RentMaster - Oferta',
            text: 'Sprawdź to ogłoszenie wynajmu:',
            url: url
        }).catch(err => console.log('Udostępnianie anulowane lub błąd:', err));
    } else {
        // Fallback dla komputerów (kopiowanie do schowka)
        navigator.clipboard.writeText(url).then(() => {
            alert("Link do ogłoszenia został skopiowany do schowka!\nMożesz go teraz wkleić w SMS lub na Facebooku.");
        }).catch(err => {
            console.error('Błąd kopiowania: ', err);
            alert("Nie udało się skopiować linku automatycznie.");
        });
    }
}

// Automatyczne otwieranie ogłoszenia po wejściu z linku
window.addEventListener('DOMContentLoaded', () => {
    if(window.location.hash) {
        const id = window.location.hash.substring(1); // np. "oferta-pisz"
        
        // Sprawdzamy czy hash dotyczy oferty
        if(id.startsWith('oferta-')) {
            const klucz = id.replace('oferta-', '');
            const card = document.getElementById(id);
            
            if(card) {
                const btn = card.querySelector('.btn-view');
                // Jeśli znaleziono przycisk, symulujemy kliknięcie, żeby rozwinąć opis
                if(btn) pokazOpis(klucz, btn);
            }
        }
    }
});

// Obsługa przesuwania (swipe) w galerii na urządzeniach dotykowych
const lightbox = document.getElementById('lightbox');
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (event) => {
    // Zapisujemy pozycję początkową dotyku
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (event) => {
    // Zapisujemy pozycję końcową dotyku
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    // Funkcja swipe działa tylko, gdy zdjęcie nie jest przybliżone (aktualnyZoom === 1)
    if (aktualnyZoom > 1) return;

    const swipeThreshold = 50; // Minimalna odległość przesunięcia, aby uznać to za swipe

    if (touchEndX < touchStartX - swipeThreshold) zmienZdjecie(1); // Swipe w lewo -> następne zdjęcie
    if (touchEndX > touchStartX + swipeThreshold) zmienZdjecie(-1); // Swipe w prawo -> poprzednie zdjęcie
}

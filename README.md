https://rentmaster.pages.dev/

# RentMaster - Platforma Wynajmu Nieruchomości

Nowoczesna strona internetowa służąca do prezentacji ofert wynajmu garaży, magazynów, mieszkań i działek. Projekt stworzony z myślą o łatwym zarządzaniu ofertami poprzez plik konfiguracyjny oraz wysokiej responsywności na urządzeniach mobilnych.

## 🚀 Główne Funkcjonalności

### 1. Dynamiczny System Ogłoszeń (`data.js`)
- **Baza Ofert**: Wszystkie ogłoszenia są przechowywane w pliku `data.js` jako tablica obiektów JSON. Pozwala to na łatwe dodawanie, edycję i usuwanie ofert bez ingerencji w kod HTML.
- **Automatyczne Renderowanie**: Skrypt `opisy.js` generuje karty ogłoszeń na podstawie danych (tytuł, cena, zdjęcia, parametry).
- **Statusy**: Obsługa flag `isRented` (nakładka "WYNAJĘTE") oraz `isBargain` (badge "OKAZJA").

### 2. Wyszukiwarka i Filtrowanie
- **Filtry**: Użytkownik może filtrować oferty po mieście (Łomża, Białystok, Ostrołęka, Pisz) oraz typie nieruchomości (Garaż, Magazyn, Mieszkanie, Działka).
- **Interaktywne Ikony**: Ikona typu nieruchomości w wyszukiwarce zmienia się dynamicznie w zależności od wyboru w liście rozwijanej (funkcja `zmienIkoneTypu`).

### 3. Galeria i Multimedia (`opisy.js`)
- **Lightbox**: Własna implementacja galerii zdjęć z obsługą przybliżania (zoom) oraz przełączania strzałkami.
- **Obsługa Gestów**: Na urządzeniach mobilnych galerię można przeglądać przesuwając palcem (swipe).

### 4. Interaktywność i Kontakt
- **Formularz Kontaktowy (AJAX)**: Wysyłanie wiadomości bez przeładowania strony przy użyciu API `FormSubmit`.
- **Formatowanie Numeru**: Automatyczne wstawianie spacji w numerze telefonu podczas wpisywania.
- **Udostępnianie**: Przycisk "Udostępnij" wykorzystujący natywne menu systemu (Web Share API) lub kopiujący link do schowka.
- **Rozwijane Opisy**: Szczegóły oferty rozwijają się płynnie po kliknięciu przycisku.

### 5. Progressive Web App (PWA)
- **Instalacja Aplikacji**: Dodano plik `manifest.json` oraz obsługę zdarzenia `beforeinstallprompt`, co pozwala na instalację strony na telefonie/komputerze.
- **Tryb Offline**: Zaimplementowano `Service Worker` (`sw.js`), który zapisuje pliki w pamięci podręcznej, umożliwiając działanie bez internetu.
- **Przycisk Instalacji**: Pojawia się w stopce tylko wtedy, gdy przeglądarka wykryje możliwość instalacji.

## 🛠️ Struktura Plików

*   `index.html` - Główna struktura strony.
*   `style.css` - Arkusze stylów (zmienne CSS, Flexbox/Grid, RWD).
*   `data.js` - "Baza danych" z ofertami.
*   `opisy.js` - Główna logika aplikacji (renderowanie, galeria, formularze).
*   `image/` - Folder z grafikami ofert i elementami interfejsu.
*   `manifest.json` - Konfiguracja PWA (ikony, nazwa, kolory).
*   `sw.js` - Service Worker (cache'owanie zasobów).

## 🖥️ Jak uruchomić projekt?

### Wymagania
Strona jest statyczna (HTML/CSS/JS), ale ze względu na politykę bezpieczeństwa przeglądarek (CORS), zaleca się uruchamianie jej na serwerze lokalnym, aby wszystkie skrypty działały poprawnie.

### Uruchomienie Lokalne
1.  Otwórz folder projektu w **VS Code**.
2.  Zainstaluj rozszerzenie **Live Server**.
3.  Kliknij prawym przyciskiem na `index.html` i wybierz **"Open with Live Server"**.

## 📝 Zarządzanie Ofertami (Jak dodać ogłoszenie?)

Aby dodać nowe ogłoszenie, otwórz plik `data.js` i dodaj nowy obiekt do tablicy `listingsData`.

**Przykładowa struktura oferty:**
```javascript
{
    "id": "unikalne-id-oferty",
    "enabled": true, // czy oferta ma być widoczna
    "city": "lomza", // klucz miasta (musi pasować do value w select w HTML)
    "type": "garage", // typ (garage, storage, apartment, plot)
    "title": "Tytuł Ogłoszenia",
    "badge": "Łomża",
    "mainImage": "sciezka/do/zdjecia.jpg",
    "gallery": ["zdjecie1.jpg", "zdjecie2.jpg"],
    "price": { "value": 300, "unit": "/mc" },
    "description": "Opis HTML...",
    "params": [
        { "icon": "fa-expand", "text": "18m²" }
    ]
}
```

## ⚙️ Konfiguracja Formularza

Formularz wysyła dane na adres email zdefiniowany w funkcji `wyslijFormularz` w pliku `opisy.js`.
Aby aktywować wysyłkę:
1.  Zmień adres email w URL `https://formsubmit.co/ajax/TWOJ_EMAIL` w pliku `opisy.js`.
2.  Wyślij pierwszą wiadomość testową ze strony.
3.  Potwierdź aktywację w otrzymanym mailu od FormSubmit.

---
&copy; 2025 RentMaster

const listingsData = [
    {
        "id": "pisz-garaz-1",
        "enabled": true,
        "city": "pisz",
        "type": "garage",
        "title": "Garaż Murowany - Centrum",
        "badge": "Pisz",
        "mainImage": "image/pisz/garaz.jpg",
        "imageStyle": "contain",
        "gallery": [
            "image/pisz/garaz.jpg",
            "image/pisz/brama.webp",
            "image/pisz/wnetrze.jpg"
        ],
        "params": [
            {
                "icon": "fa-expand",
                "text": "16m²"
            },
            {
                "icon": "fa-shield-alt",
                "text": "Monitoring"
            }
        ],
        "price": {
            "value": 225,
            "unit": "/mc"
        },
        "description": "\n            <strong>Lokalizacja:</strong> Centrum, ul. Jagodna.<br><br>\n            Garaż/Magazyn do Wynajęcia w Piszu | Bezpieczne Przechowywanie!<br><br>\n            <strong>Typ:</strong> Garaż/Magazyn<br>\n            <strong>Dostępność:</strong> Do wynajęcia od zaraz<br>\n            <strong>Przeznaczenie:</strong> Idealne do bezpiecznego przechowywania pojazdu (samochód, motocykl) lub jako magazyn na cenne przedmioty, sprzęt budowlany/ogrodniczy, czy meble.<br>\n            <strong>Ochrona Sezonowa:</strong> Doskonałe miejsce do zabezpieczenia pojazdu na okres jesienno-zimowy (ochrona przed mrozem, śniegiem i wilgocią).<br><br>\n            <strong>Czynsz:</strong> 225 zł<br>\n            <strong>Kaucja:</strong> Wymagana w wysokości 225 zł.\n            <br><br>\n            <strong>Lokalizacja na mapie:</strong><br>\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.432264666068!2d21.80665327706354!3d53.62534865719321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471d6308d2545939%3A0x6730103036666666!2sJagodna%2C%2012-200%20Pisz!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl\" width=\"100%\" height=\"300\" style=\"border:0; border-radius: 8px; margin-top: 10px; pointer-events: none;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n            <a href=\"https://www.google.com/maps/dir/?api=1&destination=Jagodna,Pisz\" target=\"_blank\" class=\"btn-navigate\"><i class=\"fas fa-location-arrow\"></i> Nawiguj do celu</a>\n        ",
        "isRented": false,
        "isBargain": true
    },
    {
        "id": "bialystok-magazyn-1",
        "enabled": true,
        "city": "bialystok",
        "type": "storage",
        "title": "Magazyn Self-Storage",
        "badge": "Białystok",
        "mainImage": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop",
        "gallery": [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop"
        ],
        "params": [
            {
                "icon": "fa-expand",
                "text": "5m²"
            },
            {
                "icon": "fa-key",
                "text": "Dostęp 24/7"
            }
        ],
        "price": {
            "value": 150,
            "unit": "/mc"
        },
        "description": "<strong>Lokalizacja:</strong> Białystok, Centrum.<br><br><strong>Opis:</strong> Nowoczesny kontener magazynowy typu self-storage. Dostęp 24/7, teren monitorowany. Idealny do przechowywania mebli, opon, sprzętu sportowego.",
        "isRented": false
    },
    {
        "id": "ostroleka-kawalerka-1",
        "enabled": true,
        "city": "ostroleka",
        "type": "apartment",
        "title": "Kawalerka po remoncie",
        "badge": "Ostrołęka",
        "mainImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500&auto=format&fit=crop",
        "gallery": [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500&auto=format&fit=crop"
        ],
        "params": [
            {
                "icon": "fa-expand",
                "text": "28m²"
            },
            {
                "icon": "fa-bed",
                "text": "1 Pokój"
            }
        ],
        "price": {
            "value": 1600,
            "unit": "/mc"
        },
        "description": "<strong>Lokalizacja:</strong> Ostrołęka, Centrum.<br><br><strong>Opis:</strong> Przytulna kawalerka po generalnym remoncie. W pełni umeblowana i wyposażona. Gotowa do zamieszkania od zaraz."
    },
    {
        "id": "lomza-garaz-przykladowy",
        "enabled": true,
        "isRented": false,
        "city": "lomza",
        "type": "garage",
        "title": "Garaż Murowany - Wojska Polskiego",
        "badge": "Łomża",
        "mainImage": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop",
        "gallery": [
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop"
        ],
        "params": [
            {
                "icon": "fa-expand",
                "text": "18m²"
            },
            {
                "icon": "fa-bolt",
                "text": "Prąd"
            }
        ],
        "price": {
            "value": 300,
            "unit": "/mc"
        },
        "description": "<strong>Lokalizacja:</strong> Łomża, osiedle Południe.<br><br><strong>Opis:</strong> Suchy garaż z kanałem i prądem. Dostępny od zaraz."
    },
    {
        "id": "lomza-kawalerka-1",
        "enabled": true,
        "city": "lomza",
        "type": "apartment",
        "title": "Kawalerka po remoncie",
        "badge": "Łomża",
        "mainImage": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500&auto=format&fit=crop",
        "gallery": [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=500&auto=format&fit=crop"
        ],
        "params": [
            {
                "icon": "fa-expand",
                "text": "28m²"
            },
            {
                "icon": "fa-bed",
                "text": "1 Pokój"
            }
        ],
        "price": {
            "value": 1600,
            "unit": "/mc"
        },
        "description": "<strong>Lokalizacja:</strong> Łomża, Centrum.<br><br><strong>Opis:</strong> Przytulna kawalerka po generalnym remoncie. W pełni umeblowana i wyposażona. Gotowa do zamieszkania od zaraz."
    },
    {
        "id": "lomza-dzialka-1",
        "enabled": true,
        "city": "lomza",
        "type": "plot",
        "title": "Działka / Plac Utwardzony",
        "badge": "Łomża",
        "mainImage": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=500&auto=format&fit=crop",
        "params": [
            {
                "icon": "fa-expand",
                "text": "500m²"
            },
            {
                "icon": "fa-layer-group",
                "text": "Utwardzona"
            }
        ],
        "price": {
            "value": 800,
            "unit": "/mc"
        },
        "description": "<strong>Lokalizacja:</strong> Łomża, okolice Szosy Zambrowskiej.<br><br><strong>Opis:</strong> Do wynajęcia utwardzony plac o powierzchni 500m2. Teren ogrodzony, dostęp do prądu i wody.<br>Idealny pod komis samochodowy, skład materiałów budowlanych lub parking dla maszyn."
    }
];
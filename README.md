# Milad IT Fest 2026

Website resmi perayaan anniversary program studi Teknik Informatika Universitas Islam Riau (UIR) dengan tema **"Code the Stars, Beyond the Horizons"** dan konsep Astro-Heritage Cyberpunk.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS (CDN)
- Space Grotesk (Google Fonts)
- Material Symbols Outlined (Icons)

## Fitur

- Hero section dengan video background, partikel animasi, mascot walk, dan typewriter effect
- Countdown timer menuju hari H
- Dokumentasi acara dengan gallery auto-scroll
- Roadmap timeline interaktif
- 6 kartu pendaftaran lomba dengan animasi flip (liquid glass style)
- FAQ accordion
- Floating WhatsApp button

## Instalasi

```bash
npm install
```

## Menjalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

## Build untuk Production

```bash
npm run build
```

Output build akan ada di folder `dist/`

## Preview Build

```bash
npm run preview
```

## Struktur Project

```
ITFest-React/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── img/
│       ├── MASKOT-NOBG.png
│       ├── LogoITFESTUIR.png
│       └── Foto.jpeg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Tentang.jsx
        ├── Gallery.jsx
        ├── Roadmap.jsx
        ├── Pendaftaran.jsx
        ├── Sponsor.jsx
        ├── FAQ.jsx
        ├── Footer.jsx
        └── WhatsAppButton.jsx
```

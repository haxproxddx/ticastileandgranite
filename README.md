# Ticas Tile & Granite Website

Modern, responsive website for **Ticas Tile & Granite** with a dynamic gallery that auto-loads photos and videos from folders.

## Tech Stack

- HTML, CSS, JavaScript (no framework)
- Node.js + Express (for serving files and reading gallery folders)

## Running Locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open in your browser:

```bash
http://localhost:3000
```

## Folder Structure

- `index.html` – Home page
- `gallery.html` – Gallery (photos & videos)
- `social.html` – Social / Follow Us page
- `assets/css/styles.css` – Global styles, layout, animations
- `assets/js/i18n.js` – EN/ES language toggle logic
- `assets/js/main.js` – Navbar, scroll animations, counters, parallax
- `assets/js/gallery.js` – Dynamic gallery loading (photos & videos)
- `gallery/photos` – Put all gallery images here (e.g. `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`)
- `gallery/videos` – Put all gallery videos here (e.g. `.mp4`, `.webm`, `.ogg`, `.mov`, `.m4v`)

## Gallery Behavior

- Any valid image added to `gallery/photos` will appear automatically on the Gallery page.
- Any valid video added to `gallery/videos` will appear automatically on the Gallery page.
- No code changes are required when adding or removing files.
- Items are **shuffled randomly on each page load**.
- Images use **lazy-loading** and open in a **lightbox** when clicked.
- Videos show a play button overlay and play inline when clicked.

## Images & Icons

- Hero / background placeholder uses `assets/images/hero-granite.jpg` – you can replace this with your own granite or countertop image.
- Social cards have placeholders where you can later add preview images.
- Simple inline icons are drawn with CSS (no external icon library required).


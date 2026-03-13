// Simple Node/Express server to serve static files
// and expose gallery endpoints that read the /gallery folders.

const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Root directory of this website project
const ROOT_DIR = __dirname;
const GALLERY_PHOTOS_DIR = path.join(ROOT_DIR, 'gallery', 'photos');
const GALLERY_VIDEOS_DIR = path.join(ROOT_DIR, 'gallery', 'videos');

app.use(express.static(ROOT_DIR));

function listMediaFiles(dir, baseUrl, allowedExtensions) {
  let items = [];
  try {
    if (!fs.existsSync(dir)) return [];
    const files = fs.readdirSync(dir, { withFileTypes: true });
    items = files
      .filter((entry) => entry.isFile())
      .filter((entry) => {
        const ext = path.extname(entry.name).toLowerCase();
        return allowedExtensions.includes(ext);
      })
      .map((entry) => ({
        name: entry.name,
        url: path.join(baseUrl, entry.name).replace(/\\/g, '/'),
      }));
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }
  return items;
}

app.get('/api/gallery/photos', (req, res) => {
  const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const items = listMediaFiles(GALLERY_PHOTOS_DIR, '/gallery/photos', allowed);
  res.json(items);
});

app.get('/api/gallery/videos', (req, res) => {
  const allowed = ['.mp4', '.webm', '.ogg', '.mov', '.m4v'];
  const items = listMediaFiles(GALLERY_VIDEOS_DIR, '/gallery/videos', allowed);
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Ticas Tile & Granite site running at http://localhost:${PORT}`);
});


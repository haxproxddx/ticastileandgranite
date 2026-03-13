// Dynamic gallery loading for photos and videos

(function () {
  const PHOTOS_ENDPOINT = '/api/gallery/photos';
  const VIDEOS_ENDPOINT = '/api/gallery/videos';

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function fetchJson(url) {
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) {
      throw new Error(`Failed to load ${url}: ${res.status}`);
    }
    return res.json();
  }

  function renderPhotos(list) {
    const grid = document.getElementById('photosGrid');
    const empty = document.getElementById('photosEmpty');
    if (!grid || !empty) return;

    grid.innerHTML = '';

    if (!list.length) {
      empty.hidden = false;
      return;
    }

    empty.hidden = true;

    shuffle(list).forEach((item) => {
      const card = document.createElement('div');
      card.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.name || 'Granite and tile project photo';
      img.loading = 'lazy';
      card.appendChild(img);

      card.addEventListener('click', () => openLightbox(item.url, img.alt));

      grid.appendChild(card);
    });
  }

  function renderVideos(list) {
    const grid = document.getElementById('videosGrid');
    const empty = document.getElementById('videosEmpty');
    if (!grid || !empty) return;

    grid.innerHTML = '';

    if (!list.length) {
      empty.hidden = false;
      return;
    }

    empty.hidden = true;

    shuffle(list).forEach((item) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'gallery-video';

      const video = document.createElement('video');
      video.src = item.url;
      video.preload = 'metadata';
      video.controls = false;
      video.muted = true;
      video.playsInline = true;
      video.loading = 'lazy';

      const overlay = document.createElement('div');
      overlay.className = 'gallery-video-overlay';

      const playBtn = document.createElement('div');
      playBtn.className = 'play-button';
      overlay.appendChild(playBtn);

      wrapper.appendChild(video);
      wrapper.appendChild(overlay);

      wrapper.addEventListener('click', () => {
        if (video.paused) {
          video.controls = true;
          video.play();
          overlay.style.opacity = '0';
        } else {
          video.pause();
          video.controls = false;
          overlay.style.opacity = '1';
        }
      });

      grid.appendChild(wrapper);
    });
  }

  function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImage');
    if (!lightbox || !img) return;

    img.src = src;
    img.alt = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImage');
    if (!lightbox || !img) return;
    img.src = '';
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  function initLightboxEvents() {
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxClose');
    if (backdrop) {
      backdrop.addEventListener('click', closeLightbox);
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  async function initGallery() {
    if (!document.getElementById('photosGrid')) return;

    initLightboxEvents();

    try {
      const [photos, videos] = await Promise.all([
        fetchJson(PHOTOS_ENDPOINT).catch(() => []),
        fetchJson(VIDEOS_ENDPOINT).catch(() => []),
      ]);
      renderPhotos(photos || []);
      renderVideos(videos || []);
    } catch (err) {
      console.error('Error loading gallery:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();


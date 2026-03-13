(function () {
  const VIDEOS_ENDPOINT = '/api/gallery/videos';

  async function fetchJson(url) {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Failed to load videos');
    return res.json();
  }

  function pickRandom(list) {
    if (!list.length) return null;
    const index = Math.floor(Math.random() * list.length);
    return list[index];
  }

  async function initAboutPreviewVideo() {
    if (document.body?.dataset.page !== 'home') return;
    const videoEl = document.getElementById('aboutPreviewVideo');
    if (!videoEl) return;

    try {
      const videos = await fetchJson(VIDEOS_ENDPOINT);
      const chosen = pickRandom(videos || []);
      if (!chosen) {
        videoEl.remove();
        return;
      }

      videoEl.src = chosen.url;
      videoEl.setAttribute('loading', 'lazy');

      const playWhenVisible = () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Autoplay muted loop once in view
                videoEl.play().catch(() => {});
                observer.disconnect();
              }
            });
          },
          { threshold: 0.4 }
        );
        observer.observe(videoEl);
      };

      playWhenVisible();
    } catch (err) {
      console.error('Error loading about preview video:', err);
      videoEl.remove();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutPreviewVideo);
  } else {
    initAboutPreviewVideo();
  }
})();


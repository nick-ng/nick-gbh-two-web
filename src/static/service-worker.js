const cacheName = 'nickGBPWA-step-6-1';

const contentfulProxyUrl = 'https://nick-gbh-contentful-proxy-s.herokuapp.com';

const processResponse = (response) => {
  const status = response.status;
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    if (status >= 400 && response.status < 600) {
      return response.json().then((json) => {
        throw json;
      });
    }
    return response.json();
  }
  return response.text();
};

const get = (url, headers = {}) => fetch(url, {
  headers: Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }, headers),
  method: 'get',
  mode: 'cors',
})
.then((res) => processResponse(res));

const filesToCache = [
  '/',
  '/static/js/bundle.js', // dev
  '/static/js/main.js', // prod
  '/static/css/main.css',
  '/favicon.ico',
  '/images/512.png',
  `${contentfulProxyUrl}/players`,
  `${contentfulProxyUrl}/guilds`,
]; // Array of URLs

/*
 Service worker thing starts here
 */
self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  const imagesToCache = [];
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Fetching player list');
      return get(`${contentfulProxyUrl}/players`)
      .then((playerList) => {
        console.log('playerList', playerList);
        Object.keys(playerList).forEach((playerName) => {
          const player = playerList[playerName];
          imagesToCache.push(`https:${player.cardFront.url}`);
          imagesToCache.push(`https:${player.cardBack.url}`);
        });
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll([
          ...filesToCache,
          ...imagesToCache,
        ]);
      });
    }),
  );
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(caches.keys().then((keyList) => Promise.all(keyList.map((key) => {
    if (key !== cacheName) {
      console.log('[ServiceWorker] Removing old cache', key);
      return caches.delete(key);
    }
    return null;
  }))));
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request)
    .then((response) => response || fetch(e.request)),
  );
});

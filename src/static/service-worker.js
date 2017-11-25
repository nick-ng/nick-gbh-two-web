const cacheName = 'weatherPWA-step-6-1';
const dataCacheName = 'weatherData-v1';

const filesToCache = [
]; // Array of URLs

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(caches.keys().then((keyList) => Promise.all(keyList.map((key) => {
    if (key !== cacheName && key !== dataCacheName) {
      console.log('[ServiceWorker] Removing old cache', key);
      return caches.delete(key);
    }
  }))));
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch', e.request.url);
  const dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then((cache) => fetch(e.request).then((response) => {
        cache.put(e.request.url, response.clone());
        return response;
      })),
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  }
});

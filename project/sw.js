const cacheName = 'heritage-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/models/taj_mahal.glb',
  '/models/qutubminar.glb',
  '/models/gateway_of_india.glb',
  '/models/india_gate.glb',
  '/models/charminar.glb'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

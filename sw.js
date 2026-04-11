const CACHE_NAME = 'cocktail-menu-v1';
const urls = [
  '/cocktail-menu-app/',
  '/cocktail-menu-app/index.html',
  '/cocktail-menu-app/manifest.json',
  '/cocktail-menu-app/icon-192.png',
  '/cocktail-menu-app/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urls)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

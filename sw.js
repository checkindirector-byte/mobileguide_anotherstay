const CACHE = "another-house-v1";
const ASSETS = [
  "/guide-anotherstay",
  "/assets/styles.css",
  "/assets/app.js",
  "/assets/images/hero.webp",
  "/assets/images/logo.webp",
  "/assets/images/arrival.webp",
  "/assets/images/climate.webp",
  "/assets/images/laundry.webp",
  "/assets/images/trash.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

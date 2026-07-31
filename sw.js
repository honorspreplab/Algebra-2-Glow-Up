const CACHE = "honors-algebra-2-prep-v77";
const APP_FILES = [
  "./",
  "./index.html",
  "./login.html",
  "./styles.css",
  "./app.js",
  "./firebase-config.js",
  "./manifest.webmanifest",
  "./icon.svg"
];
const FIREBASE_FILES = [
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-functions-compat.js"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(APP_FILES);
    await Promise.all(FIREBASE_FILES.map(async url => {
      try {
        const response = await fetch(url, { mode: "cors" });
        if (response.ok) await cache.put(url, response);
      } catch (error) {
        // Core offline practice still works with the saved-device session.
      }
    }));
  })());
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const path = new URL(event.request.url).pathname;
  const offlineFallback = () => caches.match(event.request, { ignoreSearch: true })
    .then(cached => cached || (event.request.mode === "navigate" ? caches.match("./index.html") : Response.error()));

  if (event.request.mode === "navigate" || /\.(?:html|css|js)$/.test(path)) {
    event.respondWith(
      fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(offlineFallback)
    );
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => Response.error()))
  );
});

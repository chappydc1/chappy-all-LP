// Kill-switch service worker. This project registers no service worker, but
// other apps served from the same origin (e.g. localhost:3000) can leave one
// behind that serves stale webpack chunks ("Cannot read properties of
// undefined (reading 'call')"). Browsers re-fetch /sw.js on update checks, so
// this replaces the stale worker, wipes its caches, and unregisters itself.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});

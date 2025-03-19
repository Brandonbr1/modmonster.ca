const urlsToCache = ["/", "app.js", "styles.css", "logo.svg"];
self.addEventListener("install", (event) => {
   let cacheUrls = async () => {
      const cache = await caches.open("mod-assets");
      return cache.addAll(urlsToCache);
   };
   event.waitUntil(cacheUrls());
});
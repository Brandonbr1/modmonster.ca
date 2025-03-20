const urlsToCache = ["/", "index.html", "style.css", "lo.png", "hero_img.jpg"];
self.addEventListener("install", (event) => {
   let cacheUrls = async () => {
      const cache = await caches.open("mod-assets");
      return cache.addAll(urlsToCache);
   };
   event.waitUntil(cacheUrls());
});
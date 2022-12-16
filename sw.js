const cacheName = 'quelp-v1';
const staticAssets = [
    './',
    './index.html',
    './index.js',
    './mail.html',
    './about.html',
    './search.html',
    './styles.css',
    './style.css',
    './manifest.webmanifest',
];
self.addEventListener('install',async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
       e.respondWith(cacheFirst(req));
    }else {
       e.respondWith(networkAndCache(req));
    }
});


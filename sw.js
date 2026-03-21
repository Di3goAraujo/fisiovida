const CACHE = 'fisiovida-v2';
const FILES = [
  '/fisiovida/index.html',
  '/fisiovida/manifest.json'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));

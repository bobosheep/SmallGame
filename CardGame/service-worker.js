var cacheName = 'myPWA';
var filesToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/service-worker.js',
    '/img/black-background.jpg',
    '/favicon.ico',
    '/index.html',
    '/level1.html',
    '/level2.html',
    '/css/main.css',
    '/css/bootstrap.min.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(  
        caches.keys().then(function(keyList) {  
          return Promise.all(keyList.map(function(key) {  
            console.log('[ServiceWorker] Removing old cache', key);  
            if (key !== cacheName) {  
              return caches.delete(key);  
            }  
          }));  
        })  
      );  
  });

self.addEventListener('fetch', function(e) {  
    console.log('[ServiceWorker] Fetch', e.request.url);  
    e.respondWith(  
      caches.match(e.request).then(function(response) {  
        return response || fetch(e.request);  
      })  
    );  
});
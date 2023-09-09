const cacheName = "app-shell-rsrs";
const assets = [
    '/',
    'index.html',
    'JS/animate.js',
    'JS/app.js',
    'JS/count.js',
    'JS/grocfunction.js',
    'JS/gsap.min.js',
    'JS/othfunction.js',
    'CSS/dashboard.css',
    'fontawesome/css/all.css',
    'fontawesome/sprites/solid.svg',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
];


//install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    );

});

//activate
self.addEventListener('activate', evt =>{
    console.log('service worker have been activated')
})

//fetch event
self.addEventListener('fetch', evt =>{
    console.log(evt);

    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || evt.request;
        })
    );

})
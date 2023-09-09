const cacheName = "app-shell-rsrs";
const dynamicCacheName = "dynamic-cache-v1";
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
    'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
    'https://script.google.com/macros/s/AKfycbzqcAr5iX6yO51NseJ1Y5icotGQMa2PNV6ySZjkso5DkVd_-TmsFD0Q8A_oNg8QOd1kDQ/exec'
];

//cache size limit function
const limitCacheSize = (name, size) =>{
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name,size))
            }
        })
    })
}


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
    evt.waitUntil(
        caches.keys().then(keys =>{
            return Promise.all(keys
                .filter(key => key !==cacheName)
                .map(key => caches.delete())
                )
        })
    )
})

//fetch event
self.addEventListener('fetch', evt =>{
    console.log(evt);

    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request).then(fetchRes =>{
                return caches.open(dynamicCacheName).then(cache =>{
                    cache.put(evt.request.url, fetchRes.clone())
                    limitCacheSize(dynamicCacheName, 10);
                    return fetchRes;
                })
            });
        }).catch(() =>{
            if(evt.request.url.indexOf('.html') > -1){
                return caches.match('default.html')
            }
        })
    );

})
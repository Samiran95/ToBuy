const dynamicCacheName = "dynamic-cache-v1";
const assets = [

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

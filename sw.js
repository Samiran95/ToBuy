const dynamicCacheName = "dynamic-cache-v1";
const assets = [

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
                    limitCacheSize(dynamicCacheName, 0);
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

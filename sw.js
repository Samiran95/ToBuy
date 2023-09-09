//console.log('service worker inside sw.js');

//install service worker
self.addEventListener('install', evt => {
    console.log('service worker have been installed');
});

//activate
self.addEventListener('activate', evt =>{
    console.log('service worker have been activated')
})


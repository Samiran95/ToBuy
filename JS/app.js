//check if service worker is supported
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/ToBuy/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err));
}
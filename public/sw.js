// const staticName = "app-cache-v3";
// const assets = [
//     '/dist',
//     '/dist/index.html',
//     '/dist/buyerGenerate.bundle.js',
//     '/dist/scanSeller.bundle.js',
//     '/dist/receiverInvoice.html',
//     '/dist/senderBuyer.html',
//     '/dist/senderQR.html',
//     '/dist/senderConfirmation.html',
//     '/dist/reveiverSeller.html',
//     '/dist/sellerGenerate.bundle.js',
//     '/dist/successPage.html',
//     '/dist/scanBuyer.html',
//     '/dist/scanSeller.html',
//     '/src/app.js',
//     '/dist/html5-qrcode.min.js',
//     '/css/QRApp.css',
//     'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
// ];

// //cache size limit
// // const limitCacheSize = (name, size) =>{
// //     caches.open(name).then(cache=>{
// //         cache.keys().then(keys=>{
// //             if(keys.length > size){
// //                 cache.delete(keys[0]).then(limitCacheSize(name, size))
// //             }
// //         })
// //     })
// // }

// //install service work here 
// self.addEventListener('install', (evt)=> {
//     // console.log("service worker has been installed")
//     evt.waitUntil(
//         caches.open(staticName).then(cache => {
//         console.log("caching assets")
//         cache.addAll(assets)
//     })
//     )
// })

// //activate service worker
// self.addEventListener('activate', (evt)=>{
//     // console.log("Service worker has been activated")
//     evt.waitUntil(
//         caches.keys().then(keys => {
//             return Promise.all(keys
//                 .filter(key => key !== staticName )
//                 .map(key => caches.delete(key)))
//         })
//     )
// })

// //fetch
// self.addEventListener('fetch', (evt)=>{
//     console.log("fetch event", evt)
//     evt.respondWith(
//         caches.match(evt.request).then(cacheRes => {
//             return cacheRes || fetch(evt.request)
//         })
//     )
// })
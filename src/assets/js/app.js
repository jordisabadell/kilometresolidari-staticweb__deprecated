if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            console.log('service worker registered')
        }).catch(function(error) {
            console.log('service worker not registered', err)
        });
}
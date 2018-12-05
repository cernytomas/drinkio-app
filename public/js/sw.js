var CACHE_NAME = 'drinkio-cache-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/join.html',
    '/map.html',
    '/style.css',
    '/js/init.js',
    '/js/sw.js',
    '/js/active.js',
    '/js/others/plugins.js',
    '/js/jquery/jquery-2.2.4.min.js',
    '/js/bootstrap/bootstrap.min.js',
    '/js/bootstrap/popper.min.js',
    '/css/bootstrap/bootstrap.min.css',
    '/css/others/animate.css',
    '/css/others/font-awesome.min.css',
    '/css/others/magnific-popup.css',
    '/css/others/pe-icon-7-stroke.css',
    '/css/responsive/responsive.css',
    '/fonts/FontAwesome.otf',
    '/fonts/Pe-icon-7-stroke.eot',
    '/fonts/Pe-icon-7-stroke.svg',
    '/fonts/Pe-icon-7-stroke.ttf',
    '/fonts/Pe-icon-7-stroke.woff',
    '/fonts/fontawesome-webfont.eot',
    '/fonts/fontawesome-webfont.svg',
    '/fonts/fontawesome-webfont.ttf',
    '/fonts/fontawesome-webfont.woff',
    '/fonts/fontawesome-webfont.woff2',
    '/img/bg-img/bar-bg.jpg',
    '/img/bg-img/bar1.jpg',
    '/img/bg-img/bar2.jpg',
    '/img/bg-img/bar3.jpg',
    '/img/bg-img/map.png',
    '/img/bg-img/breadcumb.jpg',
    '/img/bg-img/feature-1.jpg',
    '/img/bg-img/feature-2.jpg',
    '/img/bg-img/feature-3.jpg',
    '/img/bg-img/feature-4.jpg',
    '/img/bg-img/feature-5.jpg',
    '/img/bg-img/feature-6.jpg',
    '/img/bg-img/feature-7.jpg',
    '/img/bg-img/feature-8.jpg',
    '/img/bg-img/feature-9.jpg',
    '/img/bg-img/feature-10.jpg',
    '/img/clients-img/barcode.png',
    '/img/core-img/apple-touch-icon.png',
    '/img/core-img/drinkio_logo_transparent.png',
    '/img/core-img/favicon.ico',
    '/img/core-img/logo.png',
    '/img/core-img/map.png'
];


self.addEventListener('install', function(event) {
    console.log('installing');
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            }).catch(err => {
                console.error('Cannot open cache');
                console.error(err);
        })
    );
});

self.addEventListener('install', function(e) {
  console.log('Service Worker: zainstalowany');
});

self.addEventListener('fetch', function(e) {
  // Możesz dodać caching
});

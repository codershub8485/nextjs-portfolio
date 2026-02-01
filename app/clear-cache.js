// Force clear browser cache and reload
if (typeof window !== 'undefined') {
  console.log('Clearing browser cache and reloading...');
  
  // Clear all caches
  if ('caches' in window) {
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
      console.log('All caches cleared, reloading...');
      // Force reload with cache busting
      window.location.reload(true);
    });
  } else {
    // If no cache API, just reload
    window.location.reload(true);
  }
}

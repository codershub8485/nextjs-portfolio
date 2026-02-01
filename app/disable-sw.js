// Aggressive service worker disabling for development
if (typeof window !== 'undefined') {
  console.log('Disabling service workers...');
  
  // Disable service worker registration
  if ('serviceWorker' in navigator) {
    // Override the register method
    navigator.serviceWorker.register = function() {
      return Promise.reject(new Error('Service worker registration is disabled in development'));
    };
    
    // Unregister existing service workers
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        registration.unregister();
        console.log('Unregistered service worker:', registration.scope);
      });
    }).catch(function(error) {
      console.log('Service worker unregistration failed:', error);
    });
  }

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
      console.log('All caches cleared');
    });
  }

  // Override fetch to prevent workbox interference
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    const url = args[0];
    if (typeof url === 'string' && url.includes('workbox')) {
      console.log('Blocking workbox request:', url);
      return Promise.reject(new Error('Workbox requests are blocked in development'));
    }
    return originalFetch.apply(this, args);
  };
}

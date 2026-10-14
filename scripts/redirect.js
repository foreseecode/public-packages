(function() {
  var path = window.location.pathname.replace('/mobile/android/latest/', '/mobile/android/8.0.1/');
  if (window.location.pathname.startsWith('/public-packages/mobile/android/latest/')) {
    window.location.href = path;
  }
})();
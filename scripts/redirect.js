(function() {
  var path = window.location.pathname.replace('/mobile/android/latest/', '/mobile/android/7.4.1/');
  if (window.location.pathname.startsWith('/public-packages/mobile/android/latest/')) {
    window.location.href = path;
  }
})();
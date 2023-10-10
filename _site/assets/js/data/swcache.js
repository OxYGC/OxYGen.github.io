const resource = [
  /* --- CSS --- */
  '/_site/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/_site/app.js',
  '/_site/sw.js',

  /* --- HTML --- */
  '/_site/index.html',
  '/_site/404.html',

  
    '/_site/categories/',
  
    '/_site/tags/',
  
    '/_site/archives/',
  
    '/_site/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/_site/assets/img/favicons/android-chrome-192x192.png',
    '/_site/assets/img/favicons/android-chrome-512x512.png',
    '/_site/assets/img/favicons/apple-touch-icon.png',
    '/_site/assets/img/favicons/favicon-16x16.png',
    '/_site/assets/img/favicons/favicon-32x32.png',
    '/_site/assets/img/favicons/favicon.ico',
    '/_site/assets/img/favicons/mstile-150x150.png'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'chirpy-img.netlify.app',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];


// আসকরবাড়ী প্রগতি গ্রুপ — Service Worker (অ্যাপ শেল ক্যাশ, অফলাইনে শেল খোলে)
// ডেটা সবসময় সার্ভার (Apps Script API) থেকে আসে — API কল ক্যাশ করা হয় না।
var CACHE_NAME = "progoti-group-v5";
var SHELL = [
  "./",
  "./index.html",
  "./seed.js",
  "./emblem-data.js",
  "./seal-data.js",
  "./logo.jpg",
  "./emblem.png",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(SHELL); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE_NAME) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var url = event.request.url;
  // API (Apps Script) কল কখনো ক্যাশ নয় — সবসময় নেটওয়ার্ক
  if (url.indexOf("script.google.com") !== -1 || event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return cached || fetch(event.request).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        return res;
      }).catch(function () { return caches.match("./index.html"); });
    })
  );
});

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/085b55ad2519a5d53054.js",
    "revision": "49e0fe2ac3fd0cb7387fa59e4786b689"
  },
  {
    "url": "/_nuxt/4c3f84023f1db96617e3.js",
    "revision": "8b11081b89876f50b78018d03c012633"
  },
  {
    "url": "/_nuxt/5525993a5968708a4417.js",
    "revision": "9f5b0eba4e65b45fae15105e1d2ddcda"
  },
  {
    "url": "/_nuxt/792c9a07b74de1684bf7.js",
    "revision": "b4a539aa31452af426027b3544066df1"
  },
  {
    "url": "/_nuxt/794fceda99da438b210a.js",
    "revision": "d873bddddbec7ad7ba21609e20a40778"
  },
  {
    "url": "/_nuxt/cde8dc563c4bd00219f5.js",
    "revision": "adc03065a43e5a3b101e8976b66a23a8"
  },
  {
    "url": "/_nuxt/f749ca119fb05f8c6be4.js",
    "revision": "1efc620edef07e270311b0a05f386899"
  }
], {
  "cacheId": "nicolas-boeuf",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

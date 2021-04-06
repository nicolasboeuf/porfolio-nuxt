importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/085b55ad2519a5d53054.js",
    "revision": "49e0fe2ac3fd0cb7387fa59e4786b689"
  },
  {
    "url": "/_nuxt/54f6a69fb649cea14297.js",
    "revision": "b04a779f14255f3171a837368636a370"
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
    "url": "/_nuxt/af5b4131cfb82c1c47e4.js",
    "revision": "28e4dc43e765e62be9192166ec005b6a"
  },
  {
    "url": "/_nuxt/f0ea08f4f545cd4c24db.js",
    "revision": "9bb8031a73818752aa45e156e03b7bde"
  },
  {
    "url": "/_nuxt/f749ca119fb05f8c6be4.js",
    "revision": "1efc620edef07e270311b0a05f386899"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

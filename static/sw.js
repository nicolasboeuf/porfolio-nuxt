importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/085b55ad2519a5d53054.js",
    "revision": "49e0fe2ac3fd0cb7387fa59e4786b689"
  },
  {
    "url": "/_nuxt/3babc06cb56ac7ee49bc.js",
    "revision": "caf3e173260f1bbafa4a6a8720926e7d"
  },
  {
    "url": "/_nuxt/718ef553dcf77702d34c.js",
    "revision": "17c03906e4644213fba7555f8e775939"
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
    "url": "/_nuxt/7ff940a5cf17745f06dd.js",
    "revision": "4abc384f9739085550874c3cd44099f5"
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

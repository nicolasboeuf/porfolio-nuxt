importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07e2dd75a5f3d1d5b2d9.js",
    "revision": "95df938b892f987042281fa7a0f0ea91"
  },
  {
    "url": "/_nuxt/134f27a3c7cf54411a3d.js",
    "revision": "778275a9812d7c420237c640727b46d9"
  },
  {
    "url": "/_nuxt/13f4f8f1b6042db9de0a.js",
    "revision": "003d7a0386b40cf47a9e2413fac94620"
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
    "url": "/_nuxt/a1b2ed6081b7914082c0.js",
    "revision": "bec67feaf421c28fa8b083be698a01c5"
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

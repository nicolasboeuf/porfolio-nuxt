importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/001ace5c1d576d58577c.js",
    "revision": "7980f89a4512d29446709c8727ecc384"
  },
  {
    "url": "/_nuxt/24d2227fbd87ea0c6836.js",
    "revision": "0a344ad07048029b65dacfd463c0a80f"
  },
  {
    "url": "/_nuxt/26abe0fc381e52788dbe.js",
    "revision": "f5ea91683ee2d2b83667a396b55ff29b"
  },
  {
    "url": "/_nuxt/28461c2d86e88b667359.js",
    "revision": "86e37e9f3ff4b745ddd0efc17d336a8e"
  },
  {
    "url": "/_nuxt/794fceda99da438b210a.js",
    "revision": "d873bddddbec7ad7ba21609e20a40778"
  },
  {
    "url": "/_nuxt/93238497e0613d4bb0cf.js",
    "revision": "000d2240472d910e5b3dd849afea53e7"
  },
  {
    "url": "/_nuxt/d6a5b3c2d94c79108182.js",
    "revision": "de05292a53ce1dc6521692c00f79ffc4"
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

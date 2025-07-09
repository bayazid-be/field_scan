'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d4fbcde8091627397729bf7ab3c6aaf",
"assets/AssetManifest.bin.json": "cf1ea68ec1bbc76f81b7a6ee6d067eac",
"assets/AssetManifest.json": "7614caa248f1e307c6a2bdba3c50d84c",
"assets/assets/attendnceicon.png": "89b907340994d4e94c9102722d057f58",
"assets/assets/bankvisiticon.png": "ba01b90916f156603d8d858ebd4b16b4",
"assets/assets/bikelogbookicon.png": "f013a77f79e4bd4665655a8a09fb3d43",
"assets/assets/carboncodes.png": "4d47762ff91b4543c00038c708d73608",
"assets/assets/cdmemberlocationpin.png": "ceca862d8a6da62a8738848a09144315",
"assets/assets/centermenuicon.png": "cfce49ec27b532bc5a6f13eebad372a3",
"assets/assets/employeelocationpin.png": "4a2d1c78d12535ba565816631c40bb7a",
"assets/assets/gpsoff.png": "378f992ea01d9c028dc7b887fc3e775b",
"assets/assets/homecircle.png": "2a4477d2b3121dfa4a09260c8ca85438",
"assets/assets/leaveicon.png": "67364188d38b40abbcec3f45c4125520",
"assets/assets/leaverequestattachment.png": "3c613c3aec7dd5f7a187db42f5d5e5b2",
"assets/assets/livelocationicon.png": "23b53da5765d1b5b692421d29d5cbf8f",
"assets/assets/loadinglocation.gif": "14791f55a296fa6880aabf98b1709ad1",
"assets/assets/logo.png": "c61ca794af2f20edcf50cb06f5f8507f",
"assets/assets/menuicon.png": "6aebbd3005f0dc9abf7e8ba30ddf9bb2",
"assets/assets/movementicon.png": "697dd0b3725eb96637ade6553fa33ba5",
"assets/assets/notificationicon.png": "72000b941b42b7f43420a54945c5312a",
"assets/assets/odmemberlocationpin.png": "f3bd8e2daff6b71abd1a8284eae13178",
"assets/assets/odvisiticon.png": "4a2bc07393b9357eaa5ba941687a5f83",
"assets/assets/officelocationpin.png": "0a289daaf274cfd28202b86455cdc980",
"assets/assets/phonebookicon.png": "de46655164f77580ae76a1f37f458042",
"assets/assets/regularmemberlocationpin.png": "12d1452413acf78aa19366cfb24a82be",
"assets/assets/samitylocationpin.png": "e538f17e17e8ade7163c3af532fe71cf",
"assets/assets/samityvisiticon.png": "0e8f3f07f287bbc2ec3352fe825b683c",
"assets/assets/settingicon.png": "003be88b9524123be3a461643bfbbfcd",
"assets/assets/setupicon.png": "a26650908c260d20798dbeb9d4d55755",
"assets/assets/systemerror.png": "8806dbfaae8cc0764e741d0c796e942d",
"assets/assets/teamicon.png": "c181ffbf8bafa2632ab2d81beb835c68",
"assets/assets/updateicon.png": "0e68587ee4fe2b88e02b6646769d421e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1d98a69552d3b6161c3dee9dba320f9c",
"assets/NOTICES": "f70f15a2a939d99fd5900dc8c1a140cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c950bbb3fa33545eec53b71b15aa2ba1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45b614511bde4b5c221c577dc67a811c",
"/": "45b614511bde4b5c221c577dc67a811c",
"main.dart.js": "5a6f909c548282464aafc68b599ddbe1",
"manifest.json": "540ca0971ab336deb4556257caf8e9fb",
"version.json": "2306d68da0e683dccca4011411310486"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

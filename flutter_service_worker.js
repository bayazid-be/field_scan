'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "d7bec2134825b06a2a6557f38c7cfa96",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7613e259f111e3d03b07bda2a9133976",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31960d4cdd51d3752f991d999e3ebfd7",
".git/logs/refs/heads/main": "b85a9d7eeefb7e22235950c09efe9d70",
".git/logs/refs/remotes/origin/main": "40c75404d63bf444434a3af581ee4bd2",
".git/objects/02/a25d964556bfb554ef3f19002fe66b8ce00ab9": "474d9c0383597441f8cda54e0b7ec371",
".git/objects/06/e5f2a1ca46418d79ff07aedc056fb14b3d645f": "96b68c6a8d930890ad32a7d9fda49758",
".git/objects/09/3355ef78b3afb968682c8b5ae3505bf5caf62d": "77e245eb6de8233abffc82ace4856f29",
".git/objects/0a/e623f7693fff76c800c4e57c55b1a7ad8eea96": "3c863f28806e52e46e235a0dbebabbc0",
".git/objects/11/86d6a5da24c96c03734d7c06180a73e726751a": "7a80c90074030c587e32f36b5b3eed43",
".git/objects/15/eff164046eb0305719cac78d2f8bcd6f584736": "101198fc1f88cb6950b97b01dbc11b55",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/d18ff776e4d4124cfc8eeb32ddd13dc686ce44": "4881e37f83cd9aaf9949f4478926dd8e",
".git/objects/22/e4173df106c360e0d86887dedeb02411370856": "58889f3fef2fa03dbfc31f56a162e8df",
".git/objects/26/955242acc71596942cde20493a9bf402eb729e": "9582b68041b552af895c29198b19044e",
".git/objects/27/3f9fd18ff16baa99bd943491534eb47fe502f5": "5c3c9113e0916b2898ef2a77a7ac8397",
".git/objects/2f/a3ad69733fdb21f5d4a751a20ea12228609c59": "9f81aec6bc270a16d10e0ec9e900c13b",
".git/objects/33/a8ff5e9e2c7bca0088d660dc89355ce66c85c3": "e64e9729e7eb47e34caf67179168ca56",
".git/objects/34/12c620a005df664ac27ecd05e71cbc7656ab48": "71d67189ae6e57eca0a4a062257520c8",
".git/objects/3d/24137d170b041fb4c124175641c82d785f816e": "7d46edb954b91ca3f841a6696294e08d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/074f1d55dd07cb69f7e1f83546e2a8e2a0285d": "43efee0596467c918390009e969bbb19",
".git/objects/5a/4bb79741ac53fdba5374ba83d18976a5984bbe": "abb130100d87fc26a9c0086f918cc6bb",
".git/objects/60/d618b4a22f87cff022470419668217bb0db9e4": "f7b0a3747d4335c23303213de99ba1a8",
".git/objects/61/b9cb3b6755d12b32c21c1b9d5dbd4bed01fee0": "a88640d9cc9bedaf37858acb56b7a344",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/dd2503e0abce37494f86a66cac9a3e0d7df4bb": "cc15f0b02c2fd5318bc6fccdd81fcd69",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/a7887cdc073ae0e282445e3560be7fe18379bb": "474be25712cbab70ffff0eb37b070834",
".git/objects/76/bd779e039925e0865f74a7b22d67b3acfc46f5": "364f603de19a01e11e8a9b7b12bce9c2",
".git/objects/7d/83e0e06bd7266852e5b71dc4621bb58e917be3": "36225ef0d6d6984ca064109bf3a557b6",
".git/objects/82/790b255f6dfd146d9225a639ec07d1d183717a": "9b7fbd7c0e052ea34d8799b5ba771753",
".git/objects/85/5ab019f32546166deca17365787b1df69d17d0": "6ef512698fb2ff28b3198ad06510bace",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2054c9a63409d25dd76eb892b2f1c653bffb18": "42ebe608955beed8abeb63886fe899a1",
".git/objects/8c/80f4939770e04c0cc00a9fa194321cc1cd5619": "6a3dba77d1daf877f1442a5806174481",
".git/objects/8d/93e97908d988a85722d698d03b961818b4ca20": "fcb218949b2604502adbe82a24fb2d98",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/d357020db97d845efe8226f3c6bc883dfececa": "9e89f793d8772ca029e39af56f655003",
".git/objects/99/bd1bea9ea40aa43344225f598d50e695b500c7": "7437f139f464689ca5fc997724b6d024",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a1/09fa551efea59b6cad45d990eaf92c69057a9e": "1f6f37fc2fb373192284e236fedbaa89",
".git/objects/a1/88d74bc606fb00f6b0d9b5644d8d9960c2f59a": "615a2e65d4f08722280a8fe72502584b",
".git/objects/a6/ec50b394a2842094b15fd701c76396bc0450b0": "dc6b94f811d8c6c510a70c4a1ccea79c",
".git/objects/aa/907b6cde7ce3e5850034fb6edd1fb582d155e9": "31b702f3d206e89b4c640fe180fdaa98",
".git/objects/af/9f44de1ee70475017d12fc01efd828bd6f7d01": "30146ce98ee7efd985c02ba2953f8e19",
".git/objects/b1/e587318fa2ba4462691b1411b570da06402628": "a1af4c02fe8b7428bd7ee14e082867b5",
".git/objects/b3/26d06dfe144f314c8aabe85c82aa13dad1684b": "2fa2c808d776850917757b74fe4c8889",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/c254ae64058181e966706905b42f5c85ba7cfb": "013adef61f2867389f8536633fd7e257",
".git/objects/c5/bc4aad7117aefbc15c7d7acd27a377b9129969": "a2dd79b38f14f7a811379d602f37968a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/1c6c5bf1a02dd8d8e6838d1a62f25b00d02c02": "9527cb99bc5f94d23e371efc3e758ab7",
".git/objects/c9/5c3b068d2aadf73b0da712636f8c66b3e21ed3": "ddc25e435805ec9fcba375e4c163eea7",
".git/objects/ca/a40143a649cd33d5ca949ffff8abadb4d5fb02": "603f1b21ee9eefc2abada5a0074b9e3d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d288b8d0b996b103ad09dbecda6f5ee3200a0e": "6bb8ea6f30b7310eb0ba8fa9fa124607",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/6da98cc954cae974243a900ca9a14d17eafb25": "7bc533fc8c61a965d64b6c7832a689c7",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/665fdc59e4a0f896e092aaf68deb3292d12e10": "68ee02cd6f9aa20c6e8403bf45e593c7",
".git/objects/e6/81fdaeb7719b948a910b58659dc33de7214d7a": "23cfeb91f9b9677f4989e2ae1dedd9f0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a7690d5ea2d1a903cec8b8b81d0a2437d6fe22": "9c93ba1fe3eff550e76b30e7df5e9887",
".git/objects/f1/0ecede3c412d96ab7d24b1defac9b5b827f2d6": "4409af5145a4bbd550c7926529934468",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/df4bf0c9ba3b4856ba433c30011ced6fe7627f": "faab4988807aefddf3c130ce51b6b954",
".git/objects/f4/24ef8009b5c2b346b4b1577e4dc908cac8ce2c": "c4c03fae0968c58c3c2a657815c6e2cf",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/09595492cd7119c2d47c44696d696bff9d1785": "2bc32e8ee9e3082ff40969344f974329",
".git/objects/f7/f5b2ba3313e767d65abc7c78718804a4b03ccf": "b83d06f31fadbad4c67fa302981445e2",
".git/objects/fa/09b8ca77fb8373ff1fd0c2dad62a9b90f04e04": "7aa8a0ff4f2f48e16f56e448ec06da0e",
".git/objects/ff/0c40a7d99ca386a454019179a71b293499e6ee": "398a8cbaa27b3d783c152adfc140fd85",
".git/objects/ff/5fac08321d26ead40a4da719c4eb30cee098bb": "64ee103705b5bce0c9ce027173fc9d1f",
".git/refs/heads/main": "432011cc7bcc15909fb21c4f09454035",
".git/refs/remotes/origin/main": "432011cc7bcc15909fb21c4f09454035",
"assets/AssetManifest.bin": "8d4fbcde8091627397729bf7ab3c6aaf",
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
"flutter_bootstrap.js": "f00bf717c29e31689222932e09b1e331",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45b614511bde4b5c221c577dc67a811c",
"/": "45b614511bde4b5c221c577dc67a811c",
"main.dart.js": "64d684f46baad383217dede8672b68e5",
"manifest.json": "540ca0971ab336deb4556257caf8e9fb",
"README.md": "b0d62070a1bb7ca1d968735fea621450",
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

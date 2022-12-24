'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "12a92ef79835b40a6093bcc932b54998",
"index.html": "303d8c7abd931dfa481ee6988e37da29",
"/": "303d8c7abd931dfa481ee6988e37da29",
"c075001b96339384a97db4862b8ab8db.cache.dill.track.dill": "4395cefd579ddfdf12740a1f80ec7aa2",
"main.dart.js": "c45242b306111d44b30abefb750a9594",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "b36124bfa4242d30ffac344cbab320e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe3efdabbab826762c914b1b0811f44f",
".git/config": "d626a048a29b1fdd83121541c6ee99fc",
".git/objects/3b/dcff6d9e9bc2cbf6e4331594048b47cd97810f": "ff5e77bb37dc9633cbbd052c421d92f1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/56/764f920158c6df5a8a622475bd2451affef556": "5dd5e3f75cb498109eb96aeff8f6e87c",
".git/objects/58/613ba3916e6fb194f0cab13e0a56bdefc3fcb0": "a2a2158414d1682d646954ee44e70fcd",
".git/objects/67/faecec29603384789c48b114d4dafaa16f4d45": "6818d9f4c9ef311aeadef8bada82dd7d",
".git/objects/93/481529f660355ee671a5b0819c23067fc0d5fb": "2e82eb8fb6f86ed70336fab39fb0db9e",
".git/objects/94/e56f462434c405fd742164d6e21ef3199b2a3b": "27fb3ab4b3e13d1647de88aab481cf42",
".git/objects/0e/fa44f3181463ae93d136f0748342decc1bbd20": "b7f98a0a458b9dc1ff9c8496e052eee5",
".git/objects/33/fa4d96d0029acc5f7564283d3076b4c9aaf86c": "015a881ee748f067d7167f930d097061",
".git/objects/9d/fb428dab9615079d39527e18af813f2a166c1c": "22b791a3d36fa3cee7c58b3a17f6aa14",
".git/objects/b2/67f3c320c78e45e3c17359320e3d6207ba1fc8": "c04dec386bcbcaf3a196cd5698cd966f",
".git/objects/da/e82bc3d21e400368e69cdc7e46b0ca9f2563c6": "74f6528dd9f2772d1cd6131c84a2fd83",
".git/objects/b4/e5dae79ef657b4e6cbd596df48eee0f302f0f7": "70288ba2f45caa9aa357c127fd66945a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/8954fa128fc5dbf1438ad408bcd0b49883e189": "6dcf51540128b79a345d47b53e6caa75",
".git/objects/fd/dc4ba9170991e98468d411216dabca0c53905f": "d7a82c2c8b12774dd81b34540471d3f7",
".git/objects/f2/b63b8fdea40a7b2d41e473d034c6749476512b": "91e61bd1d38193b6d5abeb4b8011942f",
".git/objects/cf/a323afe3a157af654800619adef374f711bff2": "b9d8fa42ecdbff14b4279c8acc56b00d",
".git/objects/pack/pack-dc8b89b46d7a2d0aae37b95d310bb7a7fb170df8.pack": "ebb9fa1f955eaa52adad31ebbb8734f0",
".git/objects/pack/pack-dc8b89b46d7a2d0aae37b95d310bb7a7fb170df8.idx": "6d2fe73b96ba79bd458cfaf82c504d74",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/ac794919ba098cf2f97d12171d3a33341e2787": "280d00fc45f2df81fb8b8198c6a39a0d",
".git/objects/86/a317b75123edeaa287f4db89c4834e464a7181": "988b8d5b93f5c7abfeb2f39dd360e668",
".git/objects/2a/1c07c8da984943dd67f8592b4541238460ec67": "25b92f1bcabff0ccb5e3c854f04abfef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/6989f878f743202558bf00c5381ed76f227b1d": "b630c0687f77f704c88383b953ab6ebc",
".git/objects/9f/f849c034e67d2d0f6b8fff6eb85fa6efe70d2a": "6a031d5d5befb68eaf88ceaa3af3dcd4",
".git/objects/6b/4173f7578027daaaf62dbaca0aede0fbaaf967": "e4ccd485832c28d6c858f6dc86066291",
".git/objects/07/7641d49b066c290d355cba8da88b97119c9157": "1a2d6b1be263f86042e53b4650cef63c",
".git/objects/6e/93ecd4d592d0e1258a4a4813fe942c2bbd936e": "31ea4a4062f7dc68e5893f50ec55fbc4",
".git/objects/6e/91cf44432f9da85d1ddc34a52d2b3484da756e": "3e4d6ed7e78e758808bf022b5127148a",
".git/objects/5c/24ffe01086670d320431eeae55c26ffdf0eb89": "bac874971064aea851ac44e0f7b063d9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/ba35632159a5ec71de4209784afe66efa44abf": "4de5750cd6954008ba9b4896d896e440",
".git/objects/39/d7f255ad61976a572213096dfa31fd6a865e05": "8727cdc8d7a3715385893b8ed2c3b5a7",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/6d267ca6442cbb6eded69992565e7b74220c78": "44e3df32d2d3bccfc632411dc69abc38",
".git/objects/64/913c11f8baa5fe33adab53990b2b619a044d23": "a0888d299440a40ef8c8ebe0a778fb02",
".git/objects/ba/712bfff04a30225d782abb466ab7eaaf83f50c": "7338e2878b282c2004411fdee1ce8245",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/97f1cd62c595a23a7b8291d942a3d6000b8a81": "0fb740102f73f68287f2f88ed0a4050e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/507c00b66389c6afcca8559bcb1111e70261c1": "cf2341ef76a66ad2bc72a2025769848d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/04dd9db330de6ff9711cb66ad44e7607f1a216": "486556665d1f5acbbc15b1c7efb4e071",
".git/objects/e1/95313b502059a653b8317fee0af64075b738db": "038434a072f6a53a42cc924438275f3e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/c5/051aaa7ee5b4dacc9065ebfcf1b016a6a0cf65": "590135b082fe10785330e3a1aa7dd706",
".git/objects/f6/7448dd91331a34a0125e9b0a61aa24a4aaddaa": "4f3ab395605a9a21091e2d9938d38955",
".git/objects/f6/6f2333243827c877400a3b3f9ca5a43aa97cb7": "2590f817ed0c1fa50fe3bd4905fbbaa0",
".git/objects/f1/062d1e4d9cce4c4f8037ef13642b570a0f42f0": "d78de5e2b93b76b4740733f0f7eea242",
".git/objects/ce/aba3ebace1cd9c3942b2ee6d3c1674b4e818d9": "530671e47f5a610710279168f125fb37",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1c9a0242777de23ee2181c9c6808ff5cfefcfd": "39fe3dcf72b0cb25589347b278ab2829",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/c92f089c378f522b001c1b70cb286915ab576f": "65271afc02ad95f98ea48f4b71001f45",
".git/objects/8c/f7f5629fd9858f11bd0d1eaa8497b165b7003d": "c37ebebc377afd24625310eb13def19d",
".git/objects/85/278bf05c5ecc10f2567a90c5e57fafe875111a": "961e18a34d8799dd311c4fb98f77b036",
".git/objects/1d/ea4323c4c00e5e837ae615ac92e2a7781428fe": "0d48a897a0a13862c0c544d0acebad91",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7f/f35014f9b70061a6356c26130213c9177b6b4f": "504f19cdff2d3f3259ec2db0b52a2d4b",
".git/objects/14/cf3fd31a508060da2f1f14a24438dd940d7b82": "b4a58672207b7e87d562bfc3177650b7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f93e60451f7e9c38b87d234ac4b24411",
".git/logs/refs/heads/main": "f93e60451f7e9c38b87d234ac4b24411",
".git/logs/refs/remotes/origin/HEAD": "e5c60db564f3b5ae1e2d46c2a7559a41",
".git/logs/refs/remotes/origin/main": "0b999813640dbe236ec6fb13ebe08a81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f18fe912ebc18ec1e50b6f075269dec4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f18fe912ebc18ec1e50b6f075269dec4",
".git/index": "b315966efbf38c15dffc8955106c461c",
".git/packed-refs": "205e1bb7216fd2e5be0e77a4539ba98e",
".git/COMMIT_EDITMSG": "3a724a36e1e5e5c6eac8739f82b17f67",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "5c8a8ff2628067b2f0d70640d1c018c2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

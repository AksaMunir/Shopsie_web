'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fd7edf924d32e148c89516054415f56f",
"assets/AssetManifest.json": "4ab23ef17d4970f5e95b8a16204d33a5",
"assets/assets/fonts/h2.ttf": "738419c3ec95241a3d56e4654555005e",
"assets/assets/fonts/headings.ttf": "2eabf19db936c3a7603eaa08dce63e6b",
"assets/assets/fonts/shopsie.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/images/bottoms.png": "0b9b57291a87c4519278e13422f7bfc9",
"assets/assets/images/gigi.jpg": "064967573a2c0b2a4c3350aba0b30fb7",
"assets/assets/images/gigi2.jpg": "acaf651c1392e5535db3dbaee3153947",
"assets/assets/images/gigi3.jpg": "e3d27931675f40bd311966faa2ffec42",
"assets/assets/images/google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/images/heels.jpg": "63548088336ff9df5ed2c6d05fafbe74",
"assets/assets/images/heels.png": "3f9396976a2ce3cde6022e0aa7dfd728",
"assets/assets/images/heelss(1).jpg": "2b39847d6be593233a0e96cb2b7bd0a6",
"assets/assets/images/heelss(10).jpg": "b43ac23b1081501aacd7706e29d12fce",
"assets/assets/images/heelss(11).jpg": "0ded1d0d4ddd1192be09aa1139bc2587",
"assets/assets/images/heelss(2).jpg": "15829a3e8e009dec4cde6ff2de39c427",
"assets/assets/images/heelss(3).jpg": "6f256f47c11ce45e9696a82458e43ecd",
"assets/assets/images/heelss(4).jpg": "d5056d4974ec9d1ea0385a746a890386",
"assets/assets/images/heelss(5).jpg": "3867159b6cc93963929892cfbc1b5f33",
"assets/assets/images/heelss(6).jpg": "d551f1da6dae6863a94bb3ec2c64d681",
"assets/assets/images/heelss(7).jpg": "e532145db573a986e4b64c9ad42e266e",
"assets/assets/images/heelss(8).jpg": "2765f4b6e31450ecfe56483b0a29f160",
"assets/assets/images/heelss(9).jpg": "e2cd9882c12c3454179f79b729877b15",
"assets/assets/images/image(1).jpg": "84b12ec7f9fc020c1f4a1901524e9947",
"assets/assets/images/image(10).jpg": "bd444e6ceeb4deb534de5548dda2c594",
"assets/assets/images/image(11).jpg": "14d8a40da0d0d78bcc71837b89c8594e",
"assets/assets/images/image(12).jpg": "d0e374dd742b5148564ee7c3d549e16c",
"assets/assets/images/image(13).jpg": "44d046a143e748dcd044cae8cc6f3f3d",
"assets/assets/images/image(14).jpg": "c3bc14595c13ae09f568f361c10c50db",
"assets/assets/images/image(15).jpg": "4bd39025e43b0a53684630eb852d432a",
"assets/assets/images/image(16).jpg": "d5c3af8373042aa8405736aef6d756cb",
"assets/assets/images/image(17).jpg": "2f01d5ec84014f8ba7a603ace9d824c4",
"assets/assets/images/image(18).jpg": "4d3786b43c07f4181bc0eb67315dbab0",
"assets/assets/images/image(19).jpg": "1c5324ccd26e5de8ca0ebb021efc6bb1",
"assets/assets/images/image(2).jpg": "9715298600c24366302dbdb72b758712",
"assets/assets/images/image(20).jpg": "f7cd9bf6e2dfce22d0c6002d070e182d",
"assets/assets/images/image(23).jpg": "066a6e70aaf58fa83d16e3a0025b1f42",
"assets/assets/images/image(25).jpg": "46b86ef99c96fda94a044e9452ceddd9",
"assets/assets/images/image(28).jpeg": "f5b5af9391d12612f35b2984e6585bc5",
"assets/assets/images/image(3).jpg": "c504484eb9dba00c9b0887a8bab6db99",
"assets/assets/images/image(4).jpg": "67800f8c2ba68364fe3bac4cc8e18609",
"assets/assets/images/image(5).jpg": "9c7e55dce0ffcda8c7176dd154502d3c",
"assets/assets/images/image(7).jpg": "9e0f717ff49bf84823f33863a2f8f3fc",
"assets/assets/images/image(8).jpg": "66699856434f86c081d8aee85fe4e66d",
"assets/assets/images/image(9).jpg": "38317a709483fd8cb7fe403d3df7f8f0",
"assets/assets/images/jacket.png": "0a56d808cdcf6f515f4656efb634f24b",
"assets/assets/images/p.jpg": "94de2006b656a03a82a88ceb2d3b2169",
"assets/assets/images/pants(1).jpeg": "c9f110d10a0ec96f07ebdcc419c5c7dd",
"assets/assets/images/pants(10).jpeg": "ed1d1e4994a696b5c992ffa2cd118493",
"assets/assets/images/pants(11).jpeg": "f9460eb3dd46cb1872cd9c74e1caec69",
"assets/assets/images/pants(2).jpeg": "a82ff0a9d391b355ecc0090dbcf3360e",
"assets/assets/images/pants(3).jpeg": "8880fa3e0cdddbc31119a124cdbf2096",
"assets/assets/images/pants(4).jpeg": "4e0b461bead5982732228b9e07dffb72",
"assets/assets/images/pants(5).jpeg": "2e6ccaa65eccfc2b5c222259be895616",
"assets/assets/images/pants(6).jpeg": "27c0727e1e6cf5d12818574f1974e3dd",
"assets/assets/images/pants(7).jpeg": "1b228c5b8a190db72b6a30686541fd10",
"assets/assets/images/pants(8).jpeg": "c2f5abd1e97eab9aa568f9b0af169b6c",
"assets/assets/images/pants(9).jpeg": "92cb8efff7a0af645e2b232c6f876432",
"assets/assets/images/shirt(1).jpeg": "3c3176da64d18913e329c00e66a9143f",
"assets/assets/images/shirt(10).jpeg": "633e7c62bb44873941aa452766d1c5ef",
"assets/assets/images/shirt(11).jpeg": "cc946e687e8f1b4559524a29ea426206",
"assets/assets/images/shirt(2).jpeg": "b24d6bc9b1ee37b13de2c748a191ed0d",
"assets/assets/images/shirt(3).jpeg": "689843773915bf10ad2f0c8b7a5ffea9",
"assets/assets/images/shirt(4).jpeg": "75711ed516305497700d434385b84965",
"assets/assets/images/shirt(5).jpeg": "6c44d8627dd79753c1db1748715a048f",
"assets/assets/images/shirt(6).jpeg": "18df83dee0eaf3f39b6fb56824d88ecd",
"assets/assets/images/shirt(7).jpeg": "789a70a2c259da3d1d67ecd453fbcc1e",
"assets/assets/images/shirt(8).jpeg": "b40277e32dfe171d68af4280afa4ac00",
"assets/assets/images/shirt(9).jpeg": "48743022fa4cfc35d1e31f53e00a170c",
"assets/assets/images/Shirt.png": "a5d7eb042b8adf1359d6c6b53cdc964b",
"assets/assets/images/shoe(1).jpeg": "40bdfea2d8736d6ba427b2a13be91878",
"assets/assets/images/shoe(10).jpeg": "800bcd098c0443134b6eb7dff748d496",
"assets/assets/images/shoe(11).jpeg": "bb485153bd40a40982b05ceba0622f4c",
"assets/assets/images/shoe(2).jpeg": "00e9e20550a4da9e151013f86745a4c6",
"assets/assets/images/shoe(3).jpeg": "bff980a0972ce0373e52defa44e5ffcd",
"assets/assets/images/shoe(4).jpeg": "285995f354aabfb29bc496e17823c52e",
"assets/assets/images/shoe(5).jpeg": "cf15718fb015cf22b04e0a8ba18e7f62",
"assets/assets/images/shoe(6).jpeg": "c6ea19af029a89cd07a00c59858e00c0",
"assets/assets/images/shoe(7).jpeg": "615d6d162777ec0a654682f43c3d936c",
"assets/assets/images/shoe(8).jpeg": "f975f01f9f3ace703b8a344fc408f997",
"assets/assets/images/shoe(9).jpeg": "ccb2bddf20b798835b7bc067e6344ed5",
"assets/assets/images/shoe.png": "e50e77a64058810d46a94da6c2cd0309",
"assets/assets/images/tops(1).jpeg": "7388dcdc6afc66c5a4530ef3fcb5ded6",
"assets/assets/images/tops(10).jpeg": "3fc6c3391927f598c20f25e929b57a2a",
"assets/assets/images/tops(11).jpeg": "8cc019fd1d5fc268492305e1fc9957d0",
"assets/assets/images/tops(2).jpeg": "c0ac7b659b5e020eef05aaae4e1d39df",
"assets/assets/images/tops(3).jpeg": "5ba4d2bd1d91d941909e80ad34dd7ef2",
"assets/assets/images/tops(4).jpeg": "cb109c0e66121daca30d5edfaa1902b0",
"assets/assets/images/tops(5).jpeg": "b432aeef44d6d534c10506dfc7a040d9",
"assets/assets/images/tops(6).jpeg": "8c3950d0c40f49ff6368bcc09989d5cc",
"assets/assets/images/tops(7).jpeg": "071e9c4b16cefcfe9257057f3f3bb908",
"assets/assets/images/tops(8).jpeg": "6f9fcc0a44e193fb3dff4abc3afa0949",
"assets/assets/images/tops(9).jpeg": "f8e8c8c3cf1b290b7422bab384c22154",
"assets/assets/images/watch(1).png": "bdc98533c18ff5d897915d3c8ca68c7c",
"assets/assets/images/watch(10).jpg": "5336be9d322dea1453cc32c74687a87c",
"assets/assets/images/watch(11).jpg": "c543f25bfc5856e450e18fdcd92b0150",
"assets/assets/images/watch(2).png": "ca559056dce976060dccbbdb45453cb1",
"assets/assets/images/watch(3).jpg": "5c015818abc10c73ea10e894df0a7eab",
"assets/assets/images/watch(4).png": "a1726dae39e27358b25a5aebdc4203e3",
"assets/assets/images/watch(5).jpg": "8e1aeafb75e20ff2ffb2c88da8fe6287",
"assets/assets/images/watch(6).jpg": "e5f8144452af37e66d65a23e3a4346a1",
"assets/assets/images/watch(7).jpg": "0fe502d6227046e6a0ebf60a49ce385a",
"assets/assets/images/watch(8).jpg": "4635e021e9131c911bdb6278f1ddb0d6",
"assets/assets/images/watch(9).jpg": "fdf34b9dec10582c3dee8d84dc6ea194",
"assets/assets/images/watch.png": "fa9e6ebc29ffc1529ade1dc347d09334",
"assets/FontManifest.json": "59ab99e48f8bcb9af18453607351b4e6",
"assets/fonts/MaterialIcons-Regular.otf": "87232eafa6a1c2becb7693e01a4e2c32",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "02bdd10c20a85a2c308913204f0fc610",
"/": "02bdd10c20a85a2c308913204f0fc610",
"main.dart.js": "ebffcdd70683bbcc59b74fa8c61a3da5",
"manifest.json": "2632d5d083aee0e29800250ba44dcb08",
"shopsiee/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"shopsiee/.git/config": "2b9d4eedc073baeee2f662c86aa639d6",
"shopsiee/.git/description": "71860c77c6745379b0d44304d66b6a13",
"shopsiee/.git/FETCH_HEAD": "8025e4b9e700370bb39f2ed286bf2ffa",
"shopsiee/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"shopsiee/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"shopsiee/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"shopsiee/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"shopsiee/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"shopsiee/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"shopsiee/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"shopsiee/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"shopsiee/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"shopsiee/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"shopsiee/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"shopsiee/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"shopsiee/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"shopsiee/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"shopsiee/.git/index": "1f1beebeb19fd5e2c7ba9d7998bb97e8",
"shopsiee/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"shopsiee/.git/logs/HEAD": "291acba7dbd70635f458519e4c5d7ac5",
"shopsiee/.git/logs/refs/heads/main": "291acba7dbd70635f458519e4c5d7ac5",
"shopsiee/.git/logs/refs/remotes/origin/HEAD": "a4743c24df1a8b2737f712012dc6a8a6",
"shopsiee/.git/logs/refs/remotes/origin/main": "849464939d35f10b6ddaf5ce7d85330d",
"shopsiee/.git/objects/08/20cedce9f579c3f1f8c5c982353838c1b7033d": "aa81b89faaf02ae87bb30817a0da9d04",
"shopsiee/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"shopsiee/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"shopsiee/.git/refs/heads/main": "c00ac0aae71c8b49c40d526d30b99d4d",
"shopsiee/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"shopsiee/.git/refs/remotes/origin/main": "c00ac0aae71c8b49c40d526d30b99d4d",
"version.json": "7ec940028fcdb3f35ed34151ea9f9617"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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

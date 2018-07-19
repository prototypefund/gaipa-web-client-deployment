importScripts("/precache-manifest.fe6d85838e542a477e74e4136851c592.js", "/workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.4.1"});

if (workbox) {
  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerRoute(
    new RegExp("(https?:\/\/gaipa\.org(\/app\/)()?)"),
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.routing.registerRoute(
    new RegExp("(http?:\/\/localhost:.*(\/app\/)()?)"),
    workbox.strategies.staleWhileRevalidate()
  );
} else {
  console.log("Workbox didn't load! Offline support will not work.");
}


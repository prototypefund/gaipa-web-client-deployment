importScripts("/precache-manifest.3e6107c9c7193d9b6e760d77bfa04222.js", "/workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.4.1"});

if (workbox) {
  workbox.routing.registerRoute(
    new RegExp("(https?:\/\/gaipa\.org(\/app\/)()?)"),
    workbox.strategies.staleWhileRevalidate()
  );
  workbox.routing.registerRoute(
    new RegExp("(http?:\/\/localhost:.*(\/app\/)()?)"),
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.precaching.precacheAndRoute([]);
} else {
  console.log("Workbox didn't load! Offline support will not work.");
}


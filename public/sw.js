if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const c=e=>a(e,n),o={module:{uri:n},exports:r,require:c};s[n]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/190-d49d0f3c7a9d4126.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/333-b9c260ddb795f49a.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/391-7a8b3ea67e589d41.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/447-5f24aaf6efddd3fd.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/503-bc912f4df9f51844.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/857-f093754e28fdfe2a.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/915-92257fe68114405d.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(auth)/auth/layout-822821bbeefb28c0.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(auth)/auth/page-c0a7c8776e16bbcd.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/analytics/page-01c3ed9ae2b55fca.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/categories/page-f2eaa894565cd9d1.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/feedback/page-c4dd4f9797a277d0.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/habits/edit/%5Bid%5D/page-49729554921a7792.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/habits/page-8f3c85ed4bbbf4c8.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/layout-876ebedde36b0c3a.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/loading-7d1d1b5ae6a323fa.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/page-0ea20ac2c0813971.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/(default)/settings/page-842751482f6507d7.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/_not-found/page-f4f94841a62e9e72.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/error-35b6b5827fdb8db8.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/app/layout-e68496b3410f4782.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/c2c86bcd-5498675f257eed6f.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/fcfb803e-1b3350828655f921.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/fd9d1056-19d730fc2f8f727f.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/main-ab5699e1386bee40.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/main-app-b9d5f13ee9005562.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-dbad222136a05584.js",revision:"iSyrM8CtWrP4ogzwwRETf"},{url:"/_next/static/css/61f465a748183c0b.css",revision:"61f465a748183c0b"},{url:"/_next/static/css/63782280d289acf6.css",revision:"63782280d289acf6"},{url:"/_next/static/iSyrM8CtWrP4ogzwwRETf/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/iSyrM8CtWrP4ogzwwRETf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/aaaa9cc2c27bc3d7.woff2",revision:"1c83c5073046b835341f2152ca527312"},{url:"/_next/static/media/e3390baf8128c1f3.p.woff2",revision:"014ff6a2e8a0ed6f9bec29d4c245e1c9"},{url:"/images/ai-badge.webp",revision:"2129fc1369a5c912defcded7b691a24c"},{url:"/images/ai-badge2.webp",revision:"96658f93ecd7bfd1673329d1d38909b8"},{url:"/images/android-chrome-256x256.png",revision:"5007075a3b09866d09d06829cf1ef3af"},{url:"/images/android-chrome-512x512.png",revision:"7ea1a4b35b1c83fa077edc1d8491e5d1"},{url:"/images/favicon.ico",revision:"53233c62c8f705f9fb97ab8065ff603f"},{url:"/images/logo.webp",revision:"50ffa553f3e3623debbcbd52bd9a6301"},{url:"/images/logo2.webp",revision:"23fbef5fe6185c0f706215c64bf6a35f"},{url:"/images/opengraph.png",revision:"09cc297f733db532e59186952c1b5d9f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6QjKCtZRRrbmL4GZ5ZmjZ/_buildManifest.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/6QjKCtZRRrbmL4GZ5ZmjZ/_ssgManifest.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/100-bf1e509cfaad2a6accf1.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/283-29b5b6298576dfdfcc21.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/41199329-00348e22afe411c8c063.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/910-43b7c63132e1ac7bcb9f.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/959-45156e6ea060a2fae9eb.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/985-f70ca140cc3b3e939dbe.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/a9a7754c-0495521f71f9c9ea586e.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/cb1608f2-6753d6ccf0df0d14b78c.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/commons-cf918827c6a4deacc245.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/framework-3d3a958fac336f63ef62.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/main-8d23c568a7d2529af5f6.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/404-617458c59734a7ffe96f.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/_app-854cd01314010db7db93.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/_error-c5f85455b2e489aaa89b.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/about-4aee73d7fb83a3d7306b.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/blog-91af2929b3f279118013.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/contact-2454bd6c8b269ca9e067.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/index-42fae23b2537a91b1d2c.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/pages/post/%5Bid%5D-6e5062e1d5f9ce32bd1e.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/polyfills-3d2c0f0875171918a758.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/chunks/webpack-d96ff76fc365f305102b.js",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/_next/static/css/21758bed93ed10e68549.css",revision:"6QjKCtZRRrbmL4GZ5ZmjZ"},{url:"/images/about-img.jpg",revision:"41fcf7d5b30411fbe0f9d09b9c888077"},{url:"/images/home-img.svg",revision:"d33da942fef3b509ff3f161f3f208dd6"},{url:"/images/icons/icon-128x128.png",revision:"a0dabcfbfc1173dc2b0ff10d2de55a88"},{url:"/images/icons/icon-144x144.png",revision:"7ce504a8019084dd0e651ae15562435d"},{url:"/images/icons/icon-152x152.png",revision:"93489d0bc4f6c4f9c3fa0d90e05a9c7e"},{url:"/images/icons/icon-192x192.png",revision:"ad2ed86f6a69d6908db7505fa6566cd4"},{url:"/images/icons/icon-384x384.png",revision:"6a3f69cb8c2e3b5e1a14774cfda7d8ed"},{url:"/images/icons/icon-512x512.png",revision:"cdf5acd8ff173b2c003bb4208ffd2bb8"},{url:"/images/icons/icon-72x72.png",revision:"2295f94abbcb11bd7087593a429517a1"},{url:"/images/icons/icon-96x96.png",revision:"b9e8ab253d6f5feda25727fc03499a6d"},{url:"/manifest.json",revision:"50dee78fe7b8e63b0dd4f7ef7d48faa5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

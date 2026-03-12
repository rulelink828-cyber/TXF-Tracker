const CACHE_NAME = 'radar-app-v1';

// APP 安裝時的事件
self.addEventListener('install', (event) => {
    console.log('APP 安裝成功');
    self.skipWaiting();
});

// 啟動時的事件
self.addEventListener('activate', (event) => {
    console.log('APP 啟動中');
});

// 攔截網路請求 (這是 PWA 規定的必備條件，即使我們現在不快取資源也要寫)
self.addEventListener('fetch', (event) => {
    // 讓所有的請求都直接連上網路，不快取，確保資料都是最新的
    event.respondWith(fetch(event.request));
});

// ==UserScript==
// @name         关闭暂停广告
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  关闭暂停时视频中心的弹窗广告(爱奇艺、腾讯)
// @author       newton_miku
// @match        https://www.iqiyi.com/*
// @match        https://v.qq.com/*
// @match        https://www.kkrb.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=iqiyi.com
// @grant        GM_log
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/newton-miku/TKScript/refs/heads/main/Script/AntiPauseAD.js
// @updateURL https://raw.githubusercontent.com/newton-miku/TKScript/refs/heads/main/Script/AntiPauseAD.js
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
        var iqy_ad_close = document.querySelector(".cupid-pause-close")
        var kkrb_ad_close = document.querySelector(".layui-layer-btn0")
        var kkrb_ad = document.getElementById("latest-dev-log-content")
        var tx_ad_close = document.querySelector(".txp_zt_video_close") || document.querySelector(".txp_full_screen_pause-close") || document.querySelector(".txp_zt_close")
        if (iqy_ad_close){
            iqy_ad_close.click()
            GM_log("爱奇艺暂停广告已关闭");  
        }
        if (tx_ad_close){
            tx_ad_close.click()
            GM_log("腾讯视频暂停广告已关闭"); 
        }
        if (kkrb_ad){
            kkrb_ad_close.click()
            GM_log("kk日报广告已关闭");  
        }
    },300);
})();

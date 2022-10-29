// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://meet.jit.si/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jit.si
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let stylesheet = document.createElement("style");
    document.head.appendChild(stylesheet);
    let sheet = stylesheet.sheet;

    // hide waretmark
    sheet.insertRule(`
    a.leftwatermark > .watermark{
    visibility:hidden!important;
    }
    `);


    sheet.insertRule(`
       .details-container{
    visibility:hidden!important;
    }
    `);

    // hide arrow when filmstrip hidden
    sheet.insertRule(`
    .filmstrip.hidden{
    visibility: hidden!important;
    }
    `);

    sheet.insertRule(`
    .stage-participant-label{
    visibility: hidden!important;
    }
    `);

    sheet.insertRule(`
    #dominantSpeakerAvatarContainer{
    visibility: hidden!important;
    }
    `);

    sheet.insertRule(`
    .avatar.userAvatar{
    visibility: hidden!important;
    }
    `);


    sheet.insertRule(`
    .display-video video{
    background-color:black;
    }
    `);


    sheet.insertRule(`
    .active-speaker-indicator{
    background-color:black;
    }
    `);

    sheet.insertRule(`
    .filmstrip {
    background-color:black;
    }
    `);


    sheet.insertRule(`
    .videocontainer .tile-view-mode {
    visibility:hidden;
    }
    `);

    sheet.insertRule(`
    .videocontainer .active-speaker-indicator {
    box-shadow: none!important;
    }
    `);


    console.log("Making jitsi prettier")
})();
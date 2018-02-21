// ==UserScript==
// @name         Tumblr Link Fix
// @version      1.0.1
// @namespace    https://github.com/faokryn/tumblr-link-fix
// @description  Changes Tumblr's link decoration from a gradient to text decoration, so that it shows up on more systems
// @author       Colin O'Neill <colin@faokryn.com>
// @license      Apache v2.0
// @match        https://www.tumblr.com/dashboard*
// @match        https://www.tumblr.com/blog/*
// @match        https://www.tumblr.com/new/*
// @match        https://www.tumblr.com/reblog/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var css, style;

    css = document.createTextNode(
        '.post-content-text a,                              ' +
        '.post .post_body a,                                ' +
        '.reblog-content a {                                ' +
        '   background-image: none;                         ' +
        '   text-decoration: underline;                     ' +
        '   text-decoration-color: rgba(68,68,68,0.25);     ' +
        '   text-underline-position: under;                 ' +
        '}                                                  '
    );

    style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'faokryn-tumblr-link-fix';
    style.appendChild(css);

    document.getElementsByTagName('head')[0].appendChild(style);

})();

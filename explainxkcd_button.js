// ==UserScript==
// @name        ExplainXKCD Button
// @description Replace the XKCD store button with a link to ExplainXKCD
// @namespace   https://github.com/David-Hickey/ExplainXKCD-Button
// @include     https://xkcd.com/*
// @include     https://www.xkcd.com/*
// @version     1.1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var storeButton = $("div#topLeft li > a:contains('Store')");

var extractNumber = /^https?:\/\/(?:www\.)?xkcd.com\/(?:(\d*)\/?)?$/i;
var comicNumber = extractNumber.exec(window.location)[1];

if (comicNumber) {
  storeButton.html("<a href='https://explainxkcd.com/" + comicNumber + "/'>Explain</a>");
} else {
  storeButton.html("<a href='https://explainxkcd.com/'>Explain</a>");
}


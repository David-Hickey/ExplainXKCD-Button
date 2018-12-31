// ==UserScript==
// @name        ExplainXKCD Button
// @namespace   b945ae7b-7221-44c6-80e4-675306c15176
// @include     https://xkcd.com/*
// @include     https://www.xkcd.com/*
// @version     1
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

/*
 * Userscript that turns the XKCD store button into a link to explainxkcd.
 */

var storeButton = $("div#topLeft li > a:contains('Store')");

var extractNumber = /^https?:\/\/(?:www\.)?xkcd.com\/(?:(\d*)\/?)?$/i;
var comicNumber = extractNumber.exec(window.location)[1];

if (comicNumber) {
  storeButton.html("<a href='https://explainxkcd.com/" + comicNumber + "/'>Explain</a>");
} else {
  storeButton.html("<a href='https://explainxkcd.com/'>Explain</a>");
}


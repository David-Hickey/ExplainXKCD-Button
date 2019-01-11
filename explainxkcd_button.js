// ==UserScript==
// @name        ExplainXKCD Button
// @description Replace the XKCD store button with a link to ExplainXKCD
// @namespace   https://github.com/David-Hickey/ExplainXKCD-Button
// @include     https://xkcd.com/*
// @include     https://www.xkcd.com/*
// @version     1.1
// @grant       none
// ==/UserScript==

// Feel free to modify these to change the behaviour.
let BUTTON_TO_REPLACE = 3; // Takes values from 0-4.
let OPEN_IN_NEW_TAB = true; // true or false.

// This regex extracts the number from the URL, and only returns a
// match for valid pages on the site.
let extractNumber = /^https?:\/\/(?:www\.)?xkcd.com\/(?:(\d*)\/?)?$/i;
let match = extractNumber.exec(window.location);

if (match) {
  // Select the Nth button in the top-left div.
  let storeButton = document.querySelectorAll("div#topLeft li")[BUTTON_TO_REPLACE];
  let buttonHref = storeButton.firstChild;

  // Extract the comic number from the match. If no number in the URL
  // then this will be falsy, so we can easily handle that case.
  let comicNumber = match[1];

  if (comicNumber) {
    buttonHref.href = "https://explainxkcd.com/" + comicNumber + "/";
  } else {
    buttonHref.href = "https://explainxkcd.com/";
  }
  
  if (OPEN_IN_NEW_TAB) {
    buttonHref.target = "_blank";
  } else {
    buttonHref.target = "_self";
  }
  
  buttonHref.text = "Explain";
}

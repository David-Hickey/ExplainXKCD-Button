# ExplainXKCD-Button Userscript
Greasemonkey userscript that changes [XKCD](https://www.xkcd.com/) store button to an 'explain' button which links to the relevant [ExplainXKCD](https://www.explainxkcd.com/wiki/index.php/Main_Page) page.

You might be interested in my [Firefox addon](https://github.com/David-Hickey/ExplainXKCD-Button-Firefox), which does pretty much the same thing but is more easily configurable.

## Configuration

If you look near the top of the code you'll see the lines
```javascript
let BUTTON_TO_REPLACE = 3; // Takes values from 0-4.
let OPEN_IN_NEW_TAB = true; // true or false.
```
By modifying these you can alter the behaviour of the script. The first one controls which button is replaced:
* 0 will replace Archive
* 1 will replace What If?
* 2 will replace Blag
* 3 will replace Store
* 4 will replace About

The second option controls whether the Explain link opens in a new tab or not. `true` will make it open in a new tab, `false` will make it open in the same window.

## Image Gallery

#### Before
![Before userscript](https://raw.githubusercontent.com/David-Hickey/ExplainXKCD-Button/master/images/before.png)

#### After
![After userscript](https://raw.githubusercontent.com/David-Hickey/ExplainXKCD-Button/master/images/after.png)

//theme pathing setup
import "https://qyoh7.github.io/ace-builds/src-noconflict/ace.js"
const baseThemeURL = "https://qyoh7.github.io/ace-editor/src/theme/"; 
const themeFileNames = [
    "gruvbox.js",
    "github_dark.js",
    "nord_dark.js",
    "terminal.js",
    "xcode.js",
    "gob.js",
    "gruvbox.js",
];
const themeURLS = []

for (let index = 0; index < themeFileNames.length; index++) 
{
    themeURLS.push(baseThemeURL.concat(themeFileNames[index]));    
}

for (let index = 0; index < themeURLS.length; index++) {
    ace.config.setModuleUrl(themeFileNames.replace(".js", ""), themeURLS[index])
}

//set theme
editor.setTheme("ace/theme/gruvbox");
setKeyboardHandler(vim);

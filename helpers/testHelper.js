var { JSDOM } = require('jsdom');
var jsdom = new JSDOM('<!doctype html><html><body><div id="pagination_button_container"<span>Page:</span></div><div id="page_indicator"></div><div id="container_large"></div></body></html>');
var { window } = jsdom;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.XMLHttpRequest = XMLHttpRequest;

function loadNull() {
    return null;
  }

require.extensions['.css'] = loadNull;
require.extensions['.less'] = loadNull;
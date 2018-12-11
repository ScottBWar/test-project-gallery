var app = require('../src/app.js');
var assert = require('assert');

describe('getAllPictures', function(){
    app.getAllPictures();
      it('Should put ten images onto the initial page.', function(){
          assert.equal(document.getElementById("container_large").childNodes.length, 10);
      })
      it('Should append images wrapped in div tags.', function(){
        assert.equal(document.getElementById("container_large").childNodes[0].tagName, 'DIV');
        assert.equal(document.getElementById("container_large").childNodes[0].childNodes[0].tagName, 'IMG')
      })
})
'use strict';

var writeFile = require('write');
var Metadata = require('metadata');
var metadata = new Metadata();
metadata.set('name', 'scaffold-gulpfile');
metadata.set('description', 'Gulpfile scaffold to add a gulpfile to your project.');
metadata.set('repository', 'https://github.com/doowb/scaffold-gulpfile');
metadata.set('homepage', 'https://github.com/doowb');
metadata.set('authors', [{author: 'Brian Woodward', homepage: 'https://github.com/doowb', email: 'brian.woodward@gmail.com'}]);
metadata.addTarget('gulpfile', {src: 'gulpfile.js', dest: './'});

writeFile('manifest.json', JSON.stringify(metadata, null, 2));

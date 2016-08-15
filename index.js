'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('pandres95.me')
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run();

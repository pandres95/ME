'use strict';

require('..');

const chai = require('chai');
const Agent = require('supertest-as-promised');

global.Agent = Agent;

chai.use(require('chai-as-promised'));
global.expect = chai.expect;
chai.should();

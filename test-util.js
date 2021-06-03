'use strict';

const env = require('./env.json');
Object.keys(env).forEach(key => process.env[key] = env[key]);
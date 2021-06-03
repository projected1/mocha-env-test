const app = require('./app');

describe('test', function() {
    it('should replace the env var', function() {
        console.log('TEST %s', process.env.FOO);
        process.env.FOO = 'oops';
        app();
    })
});
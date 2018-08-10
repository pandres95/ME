'use strict';

const Bool = require('booljs');

module.exports = (async () => {
    try {
        return new Bool('pandres95.me', [ 'request-promise' ])
            .run();
    } catch (error) {
        console.error(error);
    }
})();

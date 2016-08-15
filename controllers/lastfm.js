'use strict';

module.exports = function (app) {
    const promise = new app.views.Json().promise;

    this.nowPlaying = function (req, res, next) {
        promise(Promise.resolve(null), res, next);
    };
};

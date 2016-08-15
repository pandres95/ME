'use strict';

module.exports = function (app) {
    const promise = new app.views.Json().promise;
    const Lastfm  = app.dao.Lastfm;

    this.recent = function (req, res, next) {
        promise(new Lastfm().recent(), res, next);
    };

    this.latest = function (req, res, next) {
        promise(new Lastfm().latest(), res, next);
    };
};

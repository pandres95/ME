'use strict';

module.exports = class LastfmController {
    constructor (app) {
        this.app = app;
    }

    async recent (request, response, next) {
        const { Json } = this.app.views;
        const { Lastfm } = this.app.dao;

        return new Json().promise(new Lastfm().recent(), response, next);
    };

    async latest (request, response, next) {
        const { Json } = this.app.views;
        const { Lastfm } = this.app.dao;

        return new Json().promise(new Lastfm().latest(), response, next);
    };
};

'use strict';

module.exports = function (app) {
    const lastfm = new app.controllers.Lastfm();

    return [
        {
            method: 'get',
            url: '/lastfm',
            action: lastfm.recent
        },
        {
            method: 'get',
            url: '/lastfm/latest',
            action: lastfm.latest
        }
    ];
};

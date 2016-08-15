'use strict';

module.exports = function (app) {
    const lastfm = new app.controllers.Lastfm();

    return [
        {
            method: 'get',
            url: '/lastfm/now',
            action: lastfm.nowPlaying
        }
    ];
};

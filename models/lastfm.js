'use strict';

const NoModel = require('booljs.nomodel/model');

module.exports = class LastfmModel extends NoModel {
    constructor (app) {
        super();
        this.RequestPromise = app.utilities.RequestPromise;
    }

    async recent (username) {
        const { RequestPromise } = this;

        const { recenttracks: { track } } = await  RequestPromise({
            uri: 'https://ws.audioscrobbler.com/2.0',
            qs: {
                method: 'user.getrecenttracks',
                user: username,
                'api_key': process.env.LASTFM_API_KEY,
                format: 'json'
            },
            json: true
        });

        return track;
    };
};

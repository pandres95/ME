'use strict';

module.exports = function (app) {
    let agent = new app.utilities['superagent-promise'](
        app.utilities.superagent, Promise
    );

    this.recent = function (username) {
        return (agent
            .get('https://ws.audioscrobbler.com/2.0')
            .query({
                method: 'user.getrecenttracks',
                user: username,
                'api_key': process.env.LASTFM_API_KEY,
                format: 'json'
            })
        ).end().then(res => res.body.recenttracks.track);
    };
};

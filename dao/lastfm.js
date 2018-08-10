'use strict';

module.exports = class LastfmDAO {
    constructor (app) {
        this.app = app;
    }

    async recent () {
        const model = new this.app.models.Lastfm();
        const tracks = await model.recent('pandres95');

        return tracks.map(track => ({
            artist: track.artist['#text'],
            album: track.album['#text'],
            title: track.name,
            url: track.url,
            playing: track['@attr'] && track['@attr'].nowplaying || false
        }));
    }

    async latest () {
        return (await this.recent())[0]
    };

};

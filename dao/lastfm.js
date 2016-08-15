'use strict';

module.exports = function (app) {
    let model = new app.models.Lastfm();

    this.recent = () => model.recent('pandres95').then(tracks => _.map(tracks,
        track => ({
            artist: track.artist['#text'],
            album: track.album['#text'],
            title: track.name,
            url: track.url,
            playing: track['@attr'] && track['@attr'].nowplaying || false
        })
    ));

    this.latest = function() {
        return this.recent().then(tracks => _.first(tracks));
    };

};

const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    name: String,
    title: String,
    album: String
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('playlist', PlaylistSchema, 'playlist');


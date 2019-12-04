const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    artist: String,
    album: String,
    length: Number,
    year: Number,
    genre: String,
    comment: String,
    Hidden: Boolean,
    thumbnail: String
},
    {
        timestamps: true
    })
    ;

module.exports = mongoose.model('songs', SongSchema);


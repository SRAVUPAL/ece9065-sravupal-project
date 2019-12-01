const mongoose     = require('mongoose');

const SongSchema   = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    genre: String,
    comment: String,
    year: Number,
    image: String
});

module.exports = mongoose.model('songs', SongSchema);


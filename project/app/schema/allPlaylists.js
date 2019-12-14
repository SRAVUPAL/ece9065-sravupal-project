const mongoose = require('mongoose');

const AllPlaylistsSchema = new mongoose.Schema({
    name: String,
    userid: String,
    description: String,
    privacy: String
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('allPlaylists', AllPlaylistsSchema, 'allPlaylists');


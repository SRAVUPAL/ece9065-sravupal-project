const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    reviwer: String,
    title: String,
    review: String,
    rating: Number
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('review', ReviewSchema);


const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    reviwer: String,
    title: String,
    review: String,
    rating: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('reviews', ReviewSchema, 'reviews');


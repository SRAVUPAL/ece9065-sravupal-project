const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    reviwer: String,
    review: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('review', ReviewSchema);


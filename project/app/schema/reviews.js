const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    reviwer: String,
    review: String,
    due: String,
    quantity: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('review', ReviewSchema);


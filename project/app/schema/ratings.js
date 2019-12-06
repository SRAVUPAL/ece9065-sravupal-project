const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    rating: Number,
    overall_Rating: Number
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('ratings', RatingSchema);


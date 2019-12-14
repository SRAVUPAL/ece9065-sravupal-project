const mongoose = require('mongoose');

const accessSchema = new mongoose.Schema({
    userid: String,
    token: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('access', accessSchema, 'access');


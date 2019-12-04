const mongoose = require('mongoose');

const accessSchema = new mongoose.Schema({
    userid: String,
    password: String,
    class: String
}, {
    timestamps: true
});

module.exports = mongoose.model('access', accessSchema);


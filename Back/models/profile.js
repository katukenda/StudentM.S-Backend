const mongoose = require('mongoose');

var Profile = mongoose.model('Profile', {
    username: { type: String },
    imagepath : { type: String }
});

module.exports = { Profile };
const mongoose = require('mongoose');

var Notice = mongoose.model('Notice', {
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    course: { type: String },
    date: { type: String },
    notice: { type: String },
    username: { type: String },
});

module.exports = { Notice };
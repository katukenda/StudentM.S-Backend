const mongoose = require('mongoose');

var File = mongoose.model('File', {
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    course: { type: String },
    filename: { type: String },
    file: { type: String },
    username: { type: String },
});

module.exports = { File };
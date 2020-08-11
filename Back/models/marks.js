const mongoose = require('mongoose');

var Marks = mongoose.model('Marks', {
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    course: { type: String },
    fullname: { type: String },
    username: { type: String },
    marks: { type: String },
    date: {type: Date }

});

module.exports = { Marks };
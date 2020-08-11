const mongoose = require('mongoose');

var Enrollment = mongoose.model('Enrollment', {
       
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },    
    course: { type: String },
    username: { type: String },
    course: { type: String },
    username: { type: String },
    fullname: { type: String },
    email: { type: String },    
    
});

module.exports = { Enrollment };
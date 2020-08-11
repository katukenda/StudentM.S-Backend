const mongoose = require('mongoose');

var Teacher = mongoose.model('Teacher', {
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    course: { type: String },
    teacher: { type: String }
    
    
});

module.exports = { Teacher };
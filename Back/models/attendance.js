const mongoose = require('mongoose');

var Attendance = mongoose.model('Attendance', {
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    course: { type: String },
    username: { type: String },
    attended_days: { type: Number },
    total_days: { type: Number },
    date: {type: Date }
    
});

module.exports = { Attendance };
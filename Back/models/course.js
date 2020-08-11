const mongoose = require('mongoose');

var Course = mongoose.model('Course', {    
    course: { type: String },
    duartion: { type: String },
    regfee: { type: String },
    totfee: { type: String },
    insfee: { type: String },
    dayandtime: { type: String },
    sdate: { type: String },
    edate: { type: String }
    
});

module.exports = { Course };
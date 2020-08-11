const mongoose = require('mongoose');

const Pay = mongoose.model('Pay',{
    courseId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    username: { type: String },
    course:{ type: String },
    amount:{ type: Number },
   
// message:String,
   // updated_at:{type: Date, default: Date.now}
});

module.exports = { Pay };



const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Course} = require('../models/course');
var { Attendance } = require('../models/attendance');

router.post('/', (req, res) => {
 
  var courseId;
  Course.find({ course: req.body.course},(err, docs) => {
    
    if (docs.length >= 1) {
    courseId = docs[0]["_id"];     
    console.log("-------------------course id-----"+docs[0]["_id"]);   
  
    var attendance = new Attendance({
        courseId: courseId,
        course: req.body.course,
        fullname: req.body.fullname,
        username: req.body.username,
        attended_days: req.body.attended_days,
        total_days: req.body.total_days,
        date: req.body.date
    });
    attendance.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Attendance Save : ' + JSON.stringify(err, undefined, 2)); }
    });
  } else {
     res.send(docs);
  }});
})



router.get('/cource/:course', (req, res) => {
    Attendance.find({course: req.params.course },(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Attendance records : ' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/username/:username', (req, res) => {
    Attendance.find({username: req.params.username },(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Attendance records : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/all', (req, res) => {
    Attendance.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Attendance records : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete("/unregister/:username", (req, res, next) => {
    const A = req.params.username;
    Attendance.remove({ username : A })
      .exec()
      .then(result => {
        res.json({success:true});
      })
      .catch(err => {
        console.log(err);
        res.json({
          error: err
        });
      });
  }); 

  router.delete("/unenrol/:username/:course", (req, res, next) => {
    const A = req.params.username;
    const B = req.params.course;
    Attendance.remove({ username : A , course : B})
      .exec()
      .then(result => {
        res.json({success:true});
      })
      .catch(err => {
        console.log(err);
        res.json({
          error: err
        });
      });
  }); 


module.exports = router;
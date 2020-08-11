const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Course} = require('../models/course');
var { Enrollment } = require('../models/enrollment');
var { Attendance } = require('../models/attendance');
var { Marks } = require('../models/marks');

router.post('/', (req, res) => {
    console.log("------------------run-----");
    Enrollment.find({username:req.body.username , course:req.body.course}).
    exec().
    then(doc =>{
        if(doc.length>=1){
            res.json({enrollments:false});
            console.log("-------------------run 2-----");
        }
        else{
            var courseId;
            Course.find({ course: req.body.course},(err, docs) => {
            if (docs.length >= 1) {
                courseId = docs[0]["_id"];     
                console.log("-------------------course id-----"+docs[0]["_id"]);       
            var enrollment = new Enrollment({
                courseId:courseId,
                course: req.body.course,
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email 
            });
            enrollment.save((err,post)=>{
                if(!err){
                    res.json({enrollments:true});
                    console.log(post);
                }else{
                    
                    console.log(err);
                }
            });
            } else{
              res.send(docs);
            }});
        }
    });
  
    
});


/* get request for chat group */
router.get('/:room/:username', function(req,res,next){
    Enrollment.find({course:req.params.room, username:req.params.username}).exec()
    .then(doc=>{
        if(doc.length>=1){
            res.json({success:true,msg:'member is exist'}); 
            
        }
        else{
            res.json({success:false,msg:'member is not exist'});
        }
    });
      
});



router.get('/:course', (req, res) => {
    Enrollment.find({course: req.params.course}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving data : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/enrollment/username/:username', function(req,res,next){
    console.log('username'+req.params.username);
    Enrollment.find({username: req.params.username}).exec()
    .then(doc=>{
        res.json(doc);
    });
});


router.delete("/:course", (req, res, next) => {
    const A = req.params.course;
    Course.find({ course: A},(err, docs) => {
      console.log("-------------------run-----"+docs);
    if (docs.length >= 1) {
    var courseId = docs[0]["_id"]; 
    console.log("-------------------course id-----"+docs[0]["_id"]);       
    Enrollment.remove({ course : A })
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
      Attendance.find({ courseId: courseId},(err, docs) => {
        if (docs.length >= 1) {
      Attendance.remove({courseId:courseId}).exec()
      .then(result => {
        console.log("Attendance removed"+result); ;
      })
      .catch(err => {
        console.log(err);        
      }); 
      }}); 
      Marks.find({ courseId: courseId},(err, docs) => {
        if (docs.length >= 1) {
      Marks.remove({courseId:courseId}).exec()
      .then(result => {
        console.log("Marks removed"+result); ;
      })
      .catch(err => {
        console.log(err);        
      }); 
      }}); 
    }});
    
  }); 
 

  router.delete("/unregister/:username", (req, res, next) => {
    const A = req.params.username;
    Enrollment.remove({ username : A })
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
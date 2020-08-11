const express = require('express');
var router = express.Router();
var { Course } = require('../models/course');
var { Teacher } = require('../models/teacher');
var { Enrollment } = require('../models/enrollment');
var { File } = require('../models/file');



router.post('/', (req,res)=>{
    console.log("req.body.course__"+req.body.course);
    console.log("req.body.teacher___"+req.body.teacher);
    Teacher.find({course:req.body.course , teacher:req.body.teacher}, (err,doc)=>{
    if(doc.length>=1){
        res.json({enrollment : false});
        console.log("doc.length" + doc);
    }
    else{
      var courseId;
    Course.find({ course: req.body.course},(err, docs) => {
    
    if (docs.length >= 1) {
    courseId = docs[0]["_id"]; 
      
        console.log("req.body.course"+req.body.course);
        console.log("req.body.teacher"+req.body.teacher);
        
        var teacher = new Teacher({
            courseId:courseId ,
            course:req.body.course,
            teacher:req.body.teacher
        });
        teacher.save((err,post)=>{
            if(!err){
                res.json({enrollment : true});
                console.log(post);
            }
            else{ console.log('Error in saving data : ' + JSON.stringify(err, undefined, 2)); }
        });
    
    }});}
    
    });
    });

router.get('/', (req, res) => {
    Teacher.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving data : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:teacher', (req, res) => {
    Teacher.find({teacher: req.params.teacher}, (err, docs) => {
        if (!err) { res.send(docs);console.log(docs); }
        else { console.log('Error in Retriving data : ' + JSON.stringify(err, undefined, 2)); }
    });
});

//to remove teacher from a course in teacher courses

router.delete("/teacher/:teacherId", (req, res, next) => {
  const id = req.params.teacherId;
  var teacherName;

  /* Teacher.find({_id: id}, (err, docs) => {
    if (!err) { 
      console.log("------------docs[0]---------"+docs[0]); 
     teacherName =   docs[0]["teacher"]; 
     }
    else { console.log('Error in Retriving data : ' + JSON.stringify(err, undefined, 2)); }
}); */
 
  Teacher.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Teacher is removed from the course',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/adminUserControl'
              
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
    File.remove({ teacherId: id })
    .exec()
    .then(result => {
      console.log("File removed:"+result);
    })
    .catch(err => {
      console.log("file remove error"+err);
      
    });
    /* Enrollment.remove({ teacher: teacherName })
    .exec()
    .then(result => {
      console.log("File removed:"+result);
    })
    .catch(err => {
      console.log("file remove error"+err);
      
    }); */
});

//to delete record when unregistering teacher
router.delete("/unregister/:username", (req, res, next) => {
  const A = req.params.username;
  var teacherId;
  Teacher.find({teacher: A}, (err, docs) => {
    if (!err) { 
      teacherId = docs[0]["teacher"]; 
    File.remove({ username: teacherId })
    .exec()
    .then(result => {
      console.log("file removed"+result);
    })
    .catch(err => {
      console.log(err);      
    });
   }
    
});
  Teacher.remove({ teacher : A })
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


//Enrollment collection

router.get('/:course', (req, res) => {
    Enrollment.find({course: req.params.course}, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving data : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete("/student/:enrollmentId", (req, res, next) => {
    const id = req.params.enrollmentId;
    Enrollment.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
            message: 'Student removed',
            
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

  router.delete("/tutor/:course", (req, res, next) => {
    const A = req.params.course;
    console.log(A);
    Teacher.remove({ course : A })
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
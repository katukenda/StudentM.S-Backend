const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var {Course} = require('../models/course');
const {Pay} = require('../models/pay');

// router.get('/', function(req,res,next){
//     Pay.find({},function(err,post){
//         if(err) return next(err);
//         res.json(post);
//     });
// });
router.get('/', (req, res) => {
    Pay.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Notices : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    console.log("--------------------course--------------------------"+req.body.course);
    var courseId;
    var cors = req.body.course;
    
        Course.find({ course: req.body.course},(err, docs) => {
        console.log("--------------------docs--------------------------"+docs);
        if (docs.length >= 1) {
            courseId = docs[0]["_id"];  
            var ntc = new Pay({
            courseId:courseId,
            username: req.body.username,
            course: req.body.course,
            amount: req.body.amount            
       });
       
       
    ntc.save((err, doc) => {
        if (!err) { 
            res.send(doc);
            console.log(doc); }
        else { console.log('Error in Notice Save : ' + JSON.stringify(err, undefined, 2)); }
    });
   }
 });
});

router.get('/:course', (req, res) => {
    Pay.find({course:req.params.course},function(err, docs){
        if (!err) { res.send(docs); console.log(docs); }
        else { console.log('Error in Retriving Notices : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:username/:course', (req, res) => {
    console.log(req.params.username);
    console.log(req.params.course);
    Pay.find({username:req.params.username,course:req.params.course},function(err, docs){
        if (!err) { res.send(docs); console.log(docs); }
        else { console.log('Error in Retriving Notices : ' + JSON.stringify(err, undefined, 2)); }
    });
}); 

router.delete("/unregister/:username", (req, res, next) => {
    const A = req.params.username;
    Pay.remove({ username : A })
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

// router.post('/', function(req,res,next){ 
//     Pay.create(req.body, function(err,post){
//         if(err) return next(err);
//         res.json(post);
//         console.log(post);
//     });
// }); 

module.exports = router;
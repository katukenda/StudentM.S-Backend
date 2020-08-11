const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Course} = require('../models/course');
var { Notice } = require('../models/notice');

router.get('/', (req, res) => {
    Notice.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Notices : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Notice.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Notice : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get("/getbyCourse/:course", (req, res, next) => {
    Notice.find({course:req.params.course}, (err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in getting notices : ' + JSON.stringify(err, undefined, 2)); }
  });
  });

  router.get("/getbyUsername/:username", (req, res, next) => {
    Notice.find({username:req.params.username}, (err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in getting notices : ' + JSON.stringify(err, undefined, 2)); }
  });
  });

router.post('/', (req, res) => {
    var courseId;
    Course.find({ course: req.body.course},(err, docs) => {
        if (docs.length >= 1) {
            courseId = docs[0]["_id"]; 
            var ntc = new Notice({ 
            courseId:courseId,
            course: req.body.course,
            date: req.body.date,
            notice: req.body.notice,
            username: req.body.username
        });
    ntc.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Notice Save : ' + JSON.stringify(err, undefined, 2)); }
    });
    } else{
        res.send(docs);
    }});
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var ntc = {
        course: req.body.course,
        date: req.body.date,
        notice: req.body.notice,
        username: req.body.username
    };
    Notice.findByIdAndUpdate(req.params.id, { $set: ntc }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Notice Update : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Notice.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Notice Delete : ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
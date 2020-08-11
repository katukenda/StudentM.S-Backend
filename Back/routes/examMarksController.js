const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var {Course} = require('../models/course');
var { Marks } = require('../models/marks');

router.post('/', (req, res) => {
    console.log(req.body.course);
    var courseId;
    Course.find({ course: req.body.course},(err, docs) => {
    if (docs.length >= 1) {
        courseId = docs[0]["_id"]; 
        var marks = new Marks({
        courseId: courseId,
        course: req.body.course,
        fullname: req.body.fullname,
        username: req.body.username,
        marks: req.body.marks,
        date: req.body.date
    });
    marks.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Marks Save : ' + JSON.stringify(err, undefined, 2)); }
    });
    } else{
        res.send(docs); 
    }});
})



router.get('/', (req, res) => {
    Marks.find({course:"Phython"},(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/javaforbeginners', (req, res) => {
    Marks.find({course:"javaforbeginners"},(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    }).sort({date: -1});
});

router.get('/c', (req, res) => {
   
    Marks.find({course:"C"},(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/all/current', (req, res) => {
    let subject = req.query.subject;
    let name = req.query.name;   
    console.log('name' +name); 
    console.log('subject'+subject);  
    if((subject!==null)&&(name !=='')&&(subject!=='')&&(name !==null)){
        console.log("inside error doc1");
    Marks.find({course:subject,username:name},(err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
} else if((subject!==null)&&(name =='')){
    console.log("inside error doc2");
     var today = new Date();
    today.setDate(today.getDate() - 30); 
    Marks.find({course:subject ,date:{"$gte":today}},(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
} 
 else if ((subject =='')&&(name !==null)){
    console.log("inside error doc3");
    Marks.find({username:name},(err, docs) => {
        if (!err) { res.send(docs);
        console.log("error doc"+docs);}
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
} 
});

router.get('/all', (req, res) => {
    let subject = req.query.subject;
    let name = req.query.name;   
    console.log('name' +name); 
    console.log('subject'+subject);  
    if((subject!==null)&&(name !=='')&&(subject!=='')&&(name !==null)){
        console.log("inside error doc1");
    Marks.find({course:subject,username:name},(err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
} else if((subject!==null)&&(name =='')){
    console.log("inside error doc2");
    /* var today = new Date();
    today.setDate(today.getDate() - 30); */
    Marks.find({course:subject},(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
} 
 else if ((subject =='')&&(name !==null)){
    console.log("inside error doc3");
    Marks.find({username:name},(err, docs) => {
        if (!err) { res.send(docs);
        console.log("error doc"+docs);}
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
} 
});

router.get('/get', (req, res) => {
   
    Marks.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Marks : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete("/unregister/:username", (req, res, next) => {
    const A = req.params.username;
    Marks.remove({ username : A })
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
    Marks.remove({ username : A , course : B})
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

/*
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Marks.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Student details from marks : ' + JSON.stringify(err, undefined, 2)); }
    });
});*/

module.exports = router;
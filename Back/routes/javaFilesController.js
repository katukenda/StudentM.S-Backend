const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
var {Course} = require('../models/course');
const { File } = require("../models/file");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Files/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});



const upload = multer({
  storage: storage

});

router.post("/", upload.single('file'), (req, res, next) => {
  var courseId;
    Course.find({ course: req.body.course},(err, docs) => {
        if (docs.length >= 1) {
          courseId = docs[0]["_id"];  
     var file = new File({
    courseId:courseId,
    course: req.body.course,
    filename: req.file.filename,
    file: req.file.path,
    username: req.body.username
  });
  file
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Uploaded file successfully",
        createdFile: {
          courseId:courseId,
          course: result.course,
          filename: result.filename,
          file: result.file,
          _id: result._id,
          request: {
            type: 'GET',
            url: "http://localhost:3000/java_files/" + result._id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
    }});
  });



router.get("/filenames/:course", (req, res, next) => {
  File.find({ course: req.params.course }, (err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in getting filenames : ' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get("/getByUsernameandCourse/:course/:username", (req, res, next) => {
  File.find({ course: req.params.course, username: req.params.username }, (err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in getting filenames : ' + JSON.stringify(err, undefined, 2)); }
  });
});



router.get("/:fileId", (req, res, next) => {
  const id = req.params.fileId;
  File.findById(id)
    .select('course _id file')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          product: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/java_files'
          }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});


router.delete("/:fileId", (req, res, next) => {
  const id = req.params.fileId;
  File.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'File deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/java_files',
          body: { course: 'String', file: 'String' }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/deleteAll/:course", (req, res, next) => {

  File.remove({ course: req.params.course })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Files deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3000/java_files',
          body: { course: 'String', file: 'String' }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/files/:course", (req, res, next) => {
  const A = req.params.course;
  console.log(A);
  File.remove({ course: A })
    .exec()
    .then(result => {
      res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    });
});


// router.post('/download', function(req,res,next){
//   filepath = path.join(__dirname, '../Files') + '/' + req.body.filename;
//   res.sendFile(filepath);
//   console.log("Successfully downloaded.");
// })


module.exports = router;
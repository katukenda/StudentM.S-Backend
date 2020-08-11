const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const { Profile } = require("../models/profile");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './ProfilePics/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
  
});

router.post("/", upload.single('file'), (req, res, next) => {
  var profile = new Profile({
    
    username: req.body.username,
    
    imagepath: req.file.path,
  });
  profile
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Uploaded profile image successfully",
        createdProfile: {
            username: result.username,
          
            imagepath: result.imagepath,
            _id: result._id,
            request: {
                type: 'GET',
                url: "http://localhost:3000/profile/" + result._id
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
});



router.get("/:username", (req, res, next) => {
  Profile.find({username:req.params.username}, (err, docs) => {
    if (!err) { res.send(docs); }
    else { console.log('Error in getting profile picture : ' + JSON.stringify(err, undefined, 2)); }
});
});
   



router.delete("/:username", (req, res, next) => {
  const id = req.params.username;
  Profile.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Profile picture removed.',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/profile',
              body: { usernmae: 'String', imagepath: 'String' }
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




module.exports = router;
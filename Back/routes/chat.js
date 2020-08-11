const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Chat = require('../models/Chat');
//const Course  = require('../models/course');


/* GET ALL CHATS ACCORDING TO ROOM */
router.get('/:room', function(req,res,next){
    Chat.find({room:req.params.room}, function(err,chats){
        if(err) return next(err);
        res.json(chats);
    });
});
/* SAVE ALL CHATS */
router.post('/', function(req,res,next){
    Chat.create(req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    });
}); 



module.exports = router;
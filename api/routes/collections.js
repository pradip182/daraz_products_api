const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Collection = require('../models/collections');


// collection api -> added
router.get('/',(req,res,next) => {
    Collection.find()
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err 
        });
    });
});


module.exports = router;
// routes/task.js

'use strict'
const uuidv1 = require('uuid/v1');
const express = require('express');
const cors = require('cors');
const School = require('../models/school') ; 
const router = express.Router();
var app = express()

app.use(cors());
router.all("*", cors());
// routes ending with /todos
router.route('/school')
    .post((req, res) => {
        let address = req.body.address ; 
        const schoolSchema = new School({
            name : req.body.name , 
            registerStudent : req.body.registerStudent , 
            address : {
                street : address.street,
                subrub :  address.subrub , 
                postcode : address.postcode,
                state : address.state 
            }
        })
    schoolSchema.save((err,data)=>{
        if(err){
            return  res.send(err)
        }else{
        res.json({result : data , message : 'add School Successfully'});
    
        }
    })

    }).get((req, res) => {
        School.find({}).sort({createdAt : -1}).exec((err,schoolList)=>{
            if(err){
                return res.send(err) ; 
            }else{
                    res.json(schoolList);
        
            }
        })
    })




module.exports = router;
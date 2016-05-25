/**
 * Created by gary1 on 5/20/2016.
 */
var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
var Event = require('../models/events');
mongoose.connect('mongodb://gary114:jordan23@ds062097.mlab.com:62097/mongo-mean');

router.get('/get', function(req, res){
    Event.find({}, function(err, events){
        res.json(events);
    });
});

router.get('/get/:id', function(req, res){
    Event.findOne({'_id':req.params.id}, function(err, event){
        if(!event){
            res.status(404)        // HTTP status 404: NotFound
                .send('Not found');
        }

        res.send(event);
    });
});

router.post('/post', function(req, res){
    var event = new Event({
        title:req.body.title,
        category:{
            name:req.body.category,
        },
        dateTime:req.body.dateTime,
        locationName:req.body.locationName,
        location:[req.body.locationLat||0, req.body.locationLng||0]
    });

    event.save(function(err, event){
        if(err){return res.status(500).send(err);}
        res.send(event);
    });
});

module.exports = router;
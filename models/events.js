/**
 * Created by gary1 on 5/20/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    title: {type:String, required:true },
    category:{
        name:{type:String, required:true},
        subcategory:{type:String}
    },
    dateTime:{ type: Date, default: Date.now, required:true },
    locationName:{type: String},
    location: {
        type: [Number],  // [<longitude>, <latitude>]
        index: '2d'      // create the geospatial index
    }
});

module.exports = mongoose.model('Event', EventSchema);
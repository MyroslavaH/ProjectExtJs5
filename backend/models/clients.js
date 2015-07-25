/**
* Created by Myroslava on 18.07.2015.
*/

var mongoose = require('mongoose'),
    ClientSchema = new mongoose.Schema({

        id:{
            type: Number,
            required:true
        },
        firstName:{
            type: String,
            required:true
        },
        lastName:{
            type: String,
            required:true
        },
        phone:{
            type: Number,
            required:true
        }
    });
module.exports = mongoose.model('clients', ClientSchema, 'clients');
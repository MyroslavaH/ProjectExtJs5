/**
* Created by Myroslava on 18.07.2015.
*/

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
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
            type: String,
            required:true
        }
    });
ClientSchema.plugin(autoIncrement.plugin, { model: 'clients', field: 'id' });
module.exports = mongoose.model('clients', ClientSchema, 'clients');
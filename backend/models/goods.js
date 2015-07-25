/**
 * Created by Myroslava on 20.07.2015.
 */

var mongoose = require('mongoose'),
    GoodsSchema = new mongoose.Schema({

        id:{
            type: Number,
            required:true
        },
        good:{
            type: String,
            required:true
        },
        amount:{
            type: Number,
            required:true
        }
    });
module.exports = mongoose.model('goods', GoodsSchema, 'goods');
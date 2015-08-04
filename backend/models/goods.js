/**
 * Created by Myroslava on 20.07.2015.
 */

var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    GoodsSchema = new mongoose.Schema({

        id:{
            type: Number,
            required:true,
            unique:false

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
GoodsSchema.plugin(autoIncrement.plugin, { model: 'goods', field: 'id' });
module.exports = mongoose.model('goods', GoodsSchema, 'goods');
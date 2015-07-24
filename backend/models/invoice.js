var mongoose = require('mongoose'),
    InvoiceSchema = new mongoose.Schema({
        name:{
            type: String,
            required:true
        },
        sum:{
            type: Number,
            required:true
        },
        date:{
            type: Date,
            required:true
        }
    });
module.exports = mongoose.model('invoice', InvoiceSchema, 'invoice');
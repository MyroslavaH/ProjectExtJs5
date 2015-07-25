var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment'),
    InvoiceSchema = new mongoose.Schema({
        id:{
            type: Number,
            required:true
        },
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
InvoiceSchema.plugin(autoIncrement.plugin, { model: 'invoice', field: 'id' });
module.exports = mongoose.model('invoice', InvoiceSchema, 'invoice');
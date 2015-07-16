var Invoice = require('../models/invoice');


module.exports = function (app, passport) {
    app.get('/api/invoice', function (req, res) {
        var query = Invoice.find({});
        query.exec(function (err, doc) {
            res.json(doc);
        });
    })
}
var Invoice = require('../models/invoice');
var Clients = require('../models/clients');
var Goods = require('../models/goods');

module.exports = function (app) {
    app.get('/api/invoice', function (req, res) {
        var query = Invoice.find({});
        query.exec(function (err, doc) {
            res.json(doc);
        });
    });

    app.get('/api/clients', function (req, res) {
        var query = Clients.find({});
        query.exec(function (err, doc) {
            res.json(doc);
        });
    });

    app.get('/api/goods', function (req, res) {
        var query = Goods.find({});
        query.exec(function (err, doc) {
            res.json(doc);
        });
    });

    app.post('/api/newInvoice', function(req, res) {
        var body = req.body;
        var obj = {};
        obj.name = body.name;
        obj.sum = body.sum;
        obj.date = body.date;

        var query=Invoice.find(obj, function (err, docs) {
            if (!docs.length){
                var   obj = {
                        name: body.name,
                        sum: body.sum,
                        date: body.date
                    },
                    doc = new Invoice(obj);
                doc.save(function (err, doc) {
                    if (!err && doc) {
                        res.json(doc);
                    } else {
                        res.status(404);
                        res.send();
                    }
                });
            }else{
                res.json({msg:'&&exist'});
            }
        });
    }) ;


    app.post('/api/newGood', function(req, res) {
        var body = req.body;
        var obj = {};
        obj.good = body.good;
        obj.amount = body.amount;

        var query=Goods.find(obj , function (err, docs) {
            if (!docs.length){
                var   obj = {
                        good: body.good,
                        amount: body.amount
                    },
                    doc = new Goods(obj);
                doc.save(function (err, doc) {
                    if (!err && doc) {
                        res.json(doc);
                    } else {
                        res.status(404);
                        res.send();
                    }
                });
            }else{
                res.json({msg:'Good exist'});
            }
        });
    }) ;

    app.post('/api/newClient', function(req, res) {
        var body = req.body;

        var obj = {};
        obj.firstName = body.firstName.toUpperCase();
        obj.lastName = body.lastName.toUpperCase();
        obj.phone = body.phone;

        var query=Clients.find(obj , function (err, docs) {
            if (!docs.length){
                var   obj = {
                        firstName: body.firstName.toUpperCase(),
                        lastName: body.lastName.toUpperCase(),
                        phone: body.phone
                    },

                    doc = new Clients(obj);
                doc.save(function (err, doc) {
                    if (!err && doc) {
                        res.json(doc);
                    } else {
                        res.status(404);
                        res.send();
                    }
                });
            }else{
                res.json({msg:'Client exist'});
            }
        });
    }) ;



};
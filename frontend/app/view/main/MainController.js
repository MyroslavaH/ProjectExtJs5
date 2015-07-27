/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *

 */
Ext.define('ProjectExtJs5.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    init: function(){
        this.control({
            '#tapPanelLink':{
                'openContainer': this.openNewTap
            },
            'invoice-container':{
                'openNewInvoice': this.openNewTap
            },
            'goods-container':{
                'openNewGoods': this.openNewTap
            }
        })
       this. initStore();
    },

    initStore: function(){
        var store = Ext.getStore('ProjectExtJs5.store.CustomerStore');
        var proxy = store.getProxy();
        proxy.setUrl('/api/clients');
        proxy.method ="GET";
        store.load();

        store = Ext.getStore('ProjectExtJs5.store.GoodsStore');
        proxy = store.getProxy();
        proxy.setUrl('/api/goods');
        proxy.method ="GET";
        store.load();

    },

    openNewTap: function(name){
        var container;
        var tabPanel = Ext.getCmp('tapPanelLink');

        if (name === 'invoice') {
            container = Ext.create('ProjectExtJs5.view.sale.InvoiceContainer', {
            });
        } else if (name === 'new invoice'){
            container = Ext.create('ProjectExtJs5.view.sale.NewInvoice', {
            });
        } else if (name === 'goods') {
            container = Ext.create('ProjectExtJs5.view.warehouse.GoodsContainer', {
            });
        } else if (name === 'new good') {
            container = Ext.create('ProjectExtJs5.view.warehouse.NewGoods', {
            });
        } else if (name === 'all customers') {
            container = Ext.create('ProjectExtJs5.view.clients.AllCustomers', {
            });
        } else if (name === 'new customer'){
            container = Ext.create('ProjectExtJs5.view.clients.NewCustomer', {
            });
        }else if (name === 'report'){
            container = Ext.create('ProjectExtJs5.view.reports.Report', {
            })
        }
        name = this.toUpperFirsLetter(name);
        var tab = tabPanel.add({
            title: name,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            closable:true,
            border: false,
            items: container

        });

        tabPanel.doLayout();
        tabPanel.setActiveTab(tab);
    },
    toUpperFirsLetter: function(str){
        return str.substr(0,1).toUpperCase()+ str.substr(1);
    },


    loadInvoiceStore: function() {
        var me = this;
        var grid = this.lookupReference('all-invoices-grid');
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: '/api/invoice',
            params: {
            },
            success: function(response){
                var text = response.responseText;
                var data = JSON.parse(text);
                store.loadData(data, false)
            },
            error:function(){
                console.log('Faild');
            }
        })
    },

    loadGoods: function(){
        var me = this;
        var grid = this.lookupReference('goods-grid');
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: '/api/goods',
            params: {
            },
            success: function(response){
                var text = response.responseText;
                var data = JSON.parse(text);
                store.loadData(data, false)
            },
            error:function(){
                console.log('Faild');
            }
        })
    },

    loadCustomers: function(){
        var me = this;
        var grid = this.lookupReference('all-customers');
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: '/api/clients',
            params: {
            },
            success: function(response){
                var text = response.responseText;
                var data = JSON.parse(text);
                store.loadData(data, false)
            },
            error:function(){
                console.log('Faild');
            }
        })
    },

    submitNewInvoice: function(){
        var me = this;
        var view = this.lookupReference('newInvoice');
        var name = view.down('#name').getRawValue();;
        var sum = view.down('#sum').getValue();
        var date = view.down('#date').getValue();
       // view.getForm().reset();
        console.log(name, sum);
        Ext.Ajax.request({
            method: 'POST',
            url: '/api/newInvoice',
            params: {
                name: name,
                sum: sum,
                date: date
            },
            success: function(response){
                console.log('Success');
            },
            error:function(){
                console.log('Faild');
            }
        })
    },

    addNewGood: function(){
        var me = this;
        var view = this.lookupReference('newGood');
        var good = view.down('#good').getValue();
        var amount = view.down('#amount').getValue();
        view.getForm().reset();
        console.log(good, amount);
        Ext.Ajax.request({
            method: 'POST',
            url: '/api/newGood',
            params: {
                good: good,
                amount: amount
            },
            success: function(response){
               console.log('Success');
            }
            ,
            error:function(){
                console.log('Faild');
            }
        })
    },

    addNewClient: function(){
        var me = this;
        var view = this.lookupReference('new-customer');

        var firstName = view.down('#firstName').getValue();
        var lastName = view.down('#lastName').getValue();
        var phone= view.down('#phone').getValue();
      //  var id = id.setIncrement(5000);
        view.getForm().reset();
        console.log(firstName, lastName, phone);
        Ext.Ajax.request({
            method: 'POST',
            url: '/api/newClient',
            params: {
              //  id: 54543,
                firstName: firstName,
                lastName: lastName,
                phone: phone

            },
            success: function(response){
                console.log('Success');
            }
            ,
            error:function(){
                console.log('Faild');
            }
        })
    },

    deleteRow: function(){
        var view = this.lookupReference('new-grid-invoice');
        var selected =view.getSelection();
        if(selected){
            var store = view.getStore();
            store.remove(selected)
        }

    },
    chooseRange: function(){
        var me = this;
        var view = this.lookupReference('invoiceContainer');
        var beginDate = view.down('#beginDate').getValue();
        var endDate = view.down('#endDate').getValue().setHours(23,59,59,999);

        var grid = this.lookupReference('all-invoices-grid');
        var store = grid.getStore();

        Ext.Ajax.request({
            method: 'GET',
            url: '/api/invoice',
            params: {
                dateFrom: beginDate,
                dateTo: endDate
            },
            success: function(response){
                var text = response.responseText;
                var data = JSON.parse(text);
                store.loadData(data, false)
            },
            error:function(){
                console.log('Faild');
            }
        })

    }


});
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
            }
        })
    },

    openNewTap: function(name){
        var container;
        var tabPanel = Ext.getCmp('tapPanelLink');

        if (name === 'invoice') {
            container = Ext.create('ProjectExtJs5.view.sale.InvoiceContainer', {
            });
        } else if (name === 'goods') {
            container = Ext.create('ProjectExtJs5.view.warehouse.GoodsContainer', {
            });
        } else if (name === 'cash') {
            container = Ext.create('ProjectExtJs5.view.payment.CashContainer', {
            });
        } else if (name === 'bank'){
            container = Ext.create('ProjectExtJs5.view.payment.BankContainer', {
            });
        } else if (name === 'new invoice'){
            container = Ext.create('ProjectExtJs5.view.sale.NewInvoice', {
            });
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
        var grid = this.lookupReference('invoice-grid');
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

    loadInvoiceStore: function() {
        var me = this;
        var grid = this.lookupReference('invoice-grid');
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

    submitNewInvoice: function(){
        console.log("New invoice submited")
    }
});
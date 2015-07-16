/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *

 */
Ext.define('ProjectExtJs5.view.main.MainController', {
    extend: 'Ext.app.ViewController',


    requires: [
        'Ext.window.MessageBox'
    ],

    alias: 'controller.main'    ,
    init: function(){
        this.control({
            '#tapPanelLink':{
                'openContainer': this.openNewTap
            },
            'reserve-container':{
                'openNewReserve': this.openNewTap
            },
//            '#invoice-btn':{
//                click:this.openNewTap
//            }
        })
    },

    openNewTap: function(name){
        var container;
        var tabPanel = Ext.getCmp('tapPanelLink');

        if (name === 'invoice') {
            container = Ext.create('ProjectExtJs5.view.sale.InvoiceContainer', {
            });
        } else if (name === 'return') {
            container = Ext.create('ProjectExtJs5.view.sale.ReturnContainer', {
            });
        } else if (name === 'reserve') {
            container = Ext.create('ProjectExtJs5.view.sale.ReserveContainer', {
            });
        } else if (name === 'purchase') {
            container = Ext.create('ProjectExtJs5.view.buying.PurchaseContainer', {
            });
        } else if (name === 'buy return') {
            container = Ext.create('ProjectExtJs5.view.buying.PurchaseReturnContainer', {
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
        } else if (name === 'new reserve'){
            container = Ext.create('ProjectExtJs5.view.sale.NewReserve', {
            });
        }


//        else if (name === 'new return'){
//                container = Ext.create('ProjectExtJs5.view.sale.NewReturn', {
//                });
//            }
//            else if (name === 'new invoice'){
//                container = Ext.create('ProjectExtJs5.view.sale.NewInvoice', {
//                });
//        }
//        else {
//            container = Ext.create('ProjectExtJs5.view.sale.NewReserve', {
//            });
//        }
//        if(name == 'invoice' ){
//                container = Ext.create('ProjectExtJs5.view.sale.InvoiceContainer', {
//
//                });
//            }
//            else if(name == 'return'){
//                container = Ext.create('ProjectExtJs5.view.sale.ReturnContainer',{
//
//                });
//        }
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

    loadInvoiceStore: function(){
        this.invoiceStore = Ext.getStore('ProjectExtJs5.store.InvoiceGrid');
        var me = this;
        var grid = me.lookupReference('tapPanelLink');
        console.log(grid)
//        Ext.Ajax.request({
//            method: 'GET',
//            url: '/api/invoice',
//            params: {
//            },
//            success: function(response){
//                var text = response.responseText;
//                var data = JSON.parse(text);
////                var grid = me.lookupReference('tapPanelLink');
//                var grid =me.getReference('tapPanelLink');
//                me.getInvoiceGrid().setStore(me.invoiceStore);
//                    me.invoiceStore.loadData(data, true)
//            },
//            error:function(){
//                console.log('Faild');
//            }
//        })

    }
});
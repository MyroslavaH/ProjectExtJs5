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
//    views: [
////        'menu.Main'
////        'sale.InvoiceGrid'
////        'sale.InvoiceContainer'
//
//    ],
//    stores: [
//        'InvoiceGrid'
//    ],
//    models: [
//        'InvoiceGridModel'
//    ],

    alias: 'controller.main',

    refs:[
        {
            ref: 'tapPanel',
            selector: '#tapPanelLink'
        },
        {
            ref: 'main',
            selector: 'app-main'
        },
        {
            ref: 'invoiceBtn',
            selector: '#invoice-btn'
        }
    ],
    init: function(){
        this.control({
            '#invoice-btn':{
//                click: this.onInvoiceBtnClick
            },
            '#tapPanelLink':{
                'openContainer': this.openNewTap
            }
        })
    },

    openNewTap: function(tabPanel, name){
        var container;

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
        } else {
            container = Ext.create('ProjectExtJs5.view.payment.BankContainer', {
            });
        }
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
        tabPanel.add({
                title: name,
                closable: true,
                items: container
            }
        )
    },
    toUpperFirsLetter: function(str){
        return str.substr(0,1).toUpperCase()+ str.substr(1);
    },




    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
//    onRowEditorEdit: function (editor, ctx, eOpts) {
//        var vendorColIdx = 2;
//        var combo = ctx.Grid.columns[vendorColIdx].getEditor(ctx.record);
//        var vendorRecord = combo.findRecord('name', combo.getValue());
//        ctx.record.set('vendorId', vendorRecord.get('id'));
//        ctx.Grid.getStore().sync();  // Force a post with the updated data.
//    }
});
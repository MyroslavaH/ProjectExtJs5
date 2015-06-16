/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ProjectExtJs5.view.main.MainController', {
    extend: 'Ext.app.ViewController',


    requires: [
        'Ext.window.MessageBox'
    ],

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
                'invoice': this.openNewTap
            }
        })
    },

    openNewTap: function(tabPanel){
        var container = Ext.create('ProjectExtJs5.view.main.InvoiceContainer', {

        });
        tabPanel.add({
                title: 'Invoice',
                closable: true,
                items: container
                
            }
        )
    },



    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
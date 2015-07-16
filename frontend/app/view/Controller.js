/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *

 */
Ext.define('ProjectExtJs5.view.Controller', {
    extend: 'Ext.app.Controller',
    requires: [
    ],
    refs:[
        {
            ref: 'tapPanel',
            selector: 'tapPanelLink'
        },
        {
            ref: 'invoiceGrid',
            selector: 'invoice-grid'
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
            "#invoice-btn":{
                click:this.loadInvoiceStore
            }
        });

    },


    loadInvoiceStore: function(){
        this.invoiceStore = Ext.getStore('ProjectExtJs5.store.InvoiceGrid');
        var me = this;
        Ext.Ajax.request({
            method: 'GET',
            url: '/api/invoice',
            params: {
            },
            success: function(response){
                var text = response.responseText;
                var data = JSON.parse(text);

                me.invoiceStore.loadData(data, true);
                me.getInvoiceGrid().setStore(me.invoiceStore);
            },
            error:function(){
                console.log('Faild');
            }
        })

    }
});

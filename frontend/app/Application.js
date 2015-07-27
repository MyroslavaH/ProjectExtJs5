/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ProjectExtJs5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ProjectExtJs5',


    models:[
        'ProjectExtJs5.model.CustomerModel'

    ],

    stores: [
        'ProjectExtJs5.store.InvoiceGrid',
        'ProjectExtJs5.store.CustomerStore',
        'ProjectExtJs5.store.GoodsStore',
        'ProjectExtJs5.store.NewInvoiceStore'
        ],
    views:[

    ],
//    controllers:[
//        'MainController'
//],
//
    launch: function () {
        // TODO - Launch the application
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            items: {
//                xtype: 'allcustomers'
//            }
//
//        });
    }
});

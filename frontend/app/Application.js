/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ProjectExtJs5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ProjectExtJs5',


    models:[
//        'ProjectExtJs5.model.InvoiceGridModel'
//        'InvoiceGridModel'
    ],

    stores: [
        'ProjectExtJs5.store.InvoiceGrid'
       // 'ProjectExtJs5.store.NewReturnStore'
//        'InvoiceGridPanel'
        ],
    views:[
//        'AllCustomers'
//        'InvoiceGrid',
//        'main.Main',
//        'MainContainer',
//        'MainModel',
//        'NewCustomer'
    ],
    controllers:[
//        'MainController'
],
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

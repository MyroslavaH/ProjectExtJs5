/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ProjectExtJs5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ProjectExtJs5',

    models:[
//        'InvoiceGridModel'
    ],

    stores: [
//        'InvoiceGridPanel'
        ],
    views:[
//        'AllCustomers'
//        'InvoiceGrid',
//        'Main',
//        'MainContainer',
//        'MainModel',
//        'NewCustomer'
    ],
    
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

/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 // * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ProjectExtJs5.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'ProjectExtJs5.view.main.MainController',
        'ProjectExtJs5.view.main.MainModel'

    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    items:
        [{
            region: 'north',
            xtype: 'component',
            padding: 10,
            height: 40,
            html: 'My Company'
        },
            {
                xtype: 'app-menu'

            },
            {
                region: 'center',
                itemId: 'tapPanelLink',
                id: 'tapPanelLink',
                xtype: 'tabpanel',
                reference: 'tapPanelLink'
            }
        ],

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
            me.down('#invoice-btn').on('click', me.setFireEvent, me, 'invoice');
            me.down('#new-invoice-btn').on('click', me.setFireEvent, me, 'new invoice');
            me.down('#goods-btn').on('click', me.setFireEvent, me, 'goods');
            me.down('#new-good-btn').on('click', me.setFireEvent, me, 'new good');
            me.down('#new-customer-btn').on('click', me.setFireEvent, me, 'new customer');
            me.down('#all-customers').on('click', me.setFireEvent, me, 'all customers');

    },

    setFireEvent: function(scope, el, title){
        this.down('#tapPanelLink').fireEvent('openContainer', title)
    }
});

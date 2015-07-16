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
                reference: 'tapPanelLink',
                itemId:'tapPanelEl',
                xtype: 'tabpanel'

            }
        ],
    initComponent: function () {
            var me = this;
            me.callParent(arguments);
            me.down('#invoice-btn').on('click', me.setFireEvent, me, 'invoice'),
            me.down('#reserve-btn').on('click', me.setFireEvent, me, 'reserve'),
            me.down('#purchase-btn').on('click', me.setFireEvent, me, 'purchase'),
            me.down('#buy-return-btn').on('click', me.setFireEvent, me, 'buy return'),
            me.down('#goods-btn').on('click', me.setFireEvent, me, 'goods'),
            me.down('#change-btn').on('click', me.setFireEvent, me, 'change availability'),
            me.down('#cash-btn').on('click', me.setFireEvent, me, 'cash'),
            me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank'),
            me.down('#new-customer-btn').on('click', me.setFireEvent, me, 'new customer'),
            me.down('#all-customers').on('click', me.setFireEvent, me, 'all customers');


//        me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank'),
//        me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank'),
//        me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank')


    },

    setFireEvent: function(scope, el, title){
        this.down('#tapPanelEl').fireEvent('openContainer', title)
    }
});

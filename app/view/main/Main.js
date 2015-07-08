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
        'ProjectExtJs5.view.main.MainModel',
        'ProjectExtJs5.view.menu.Menu',
        'ProjectExtJs5.view.clients.NewCustomer',
        'ProjectExtJs5.view.clients.AllCustomers',
        'ProjectExtJs5.view.sale.InvoiceGrid',
        'ProjectExtJs5.view.sale.InvoiceContainer',
        'ProjectExtJs5.view.sale.NewInvoice',
        'ProjectExtJs5.view.sale.ReturnContainer',
        'ProjectExtJs5.view.sale.ReturnGrid',
        'ProjectExtJs5.view.sale.NewReturn',
        'ProjectExtJs5.view.sale.ReserveContainer',
        'ProjectExtJs5.view.sale.ReserveGrid',
        'ProjectExtJs5.view.sale.NewReserve',
        'ProjectExtJs5.view.buying.PurchaseContainer',
        'ProjectExtJs5.view.buying.PurchaseGrid',
        'ProjectExtJs5.view.buying.NewPurchase',
        'ProjectExtJs5.view.buying.PurchaseReturnContainer',
        'ProjectExtJs5.view.buying.PurchaseReturnGrid',
        'ProjectExtJs5.view.buying.NewPurchaseReturn',
        'ProjectExtJs5.view.warehouse.GoodsContainer',
        'ProjectExtJs5.view.warehouse.GoodsGrid',
        'ProjectExtJs5.view.warehouse.NewGoods',
        'ProjectExtJs5.view.warehouse.ChangeAvailabilityContainer',
        'ProjectExtJs5.view.payment.CashContainer',
        'ProjectExtJs5.view.payment.CashGrid',
        'ProjectExtJs5.view.payment.BankContainer',
        'ProjectExtJs5.view.payment.BankGrid'
//        'ProjectExtJs5.view.sale.Grid'

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
                xtype: 'tabpanel',
                reference: 'tapPanelLink'

            }
        ],
    initComponent: function () {
            var me = this;
            me.callParent(arguments);
            me.down('#invoice-btn').on('click', me.setFireEvent, me, 'invoice'),
            me.down('#return-btn').on('click', me.setFireEvent, me, 'return'),
            me.down('#reserve-btn').on('click', me.setFireEvent, me, 'reserve'),
            me.down('#purchase-btn').on('click', me.setFireEvent, me, 'purchase'),
            me.down('#buy-return-btn').on('click', me.setFireEvent, me, 'buy return'),
            me.down('#goods-btn').on('click', me.setFireEvent, me, 'goods'),
            me.down('#change-btn').on('click', me.setFireEvent, me, 'change availability'),
            me.down('#cash-btn').on('click', me.setFireEvent, me, 'cash'),
            me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank'),
            me.down('#new-customer-btn').on('click', me.setFireEvent, me, 'new customer'),
            me.down('#all-customers').on('click', me.setFireEvent, me, 'all customers')
//        me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank'),
//        me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank'),
//        me.down('#bank-btn').on('click', me.setFireEvent, me, 'bank')


    },

    setFireEvent: function(scope, el, title){
        var tapPanel = this.down('#tapPanelLink');
        this.down('#tapPanelLink').fireEvent('openContainer', tapPanel, title)
    }
});

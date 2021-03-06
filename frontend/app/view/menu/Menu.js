Ext.define('ProjectExtJs5.view.menu.Menu', {
    extend: 'Ext.panel.Panel',
    requires: [
        'ProjectExtJs5.view.main.MainController',
        'ProjectExtJs5.view.main.MainModel'
    ],

    xtype: 'app-menu',
    cls:'app-menu',
    viewModel: {
        type: 'main'
    },
    itemId:'menu',
    margin: '30 0 0 0',
    title: 'Menu',
    region: 'west',
    width: 200,
    split: true,
    preventHeader: true,
    hideCollapseTool: true,
    collapsible: true,
    collapsed: false,
    closeAction: 'hide',
    floatable: false,
    titleCollapse: true,
    titleRotation: 'right',
    titleAlign: 'center',
    layout: {
        type: 'vbox'
    },
    items: [
        {
            xtype: 'panel',
            itemId: 'sale-btn',
            title: 'Sale',
            cls:'menu-panel',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
            closeAction: 'hide',
            floatable: false,
            titleCollapse: true,
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Invoices',
                    width: 200,
                    itemId: 'invoice-btn',
                    cls: 'button-style open',
                    handler:'loadInvoiceStore'
                },
                {
                    xtype: 'button',
                    text: 'New Invoice',
                    width: 200,
                    cls: 'button-style open',
                    itemId:'new-invoice-btn'

                }
            ]
        },
        {
            xtype: 'panel',
            title: 'Warehouse',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
            closeAction: 'hide',
            floatable: false,
            cls:'menu-panel',
            titleCollapse: true,
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Goods',
                    width: 200,
                    itemId: 'goods-btn',
                    handler: 'loadGoods'
                },
                {
                    xtype: 'button',
                    text: 'New good',
                    width: 200,
                    itemId: 'new-good-btn'
                }
            ]
        },
        {
            xtype: 'panel',
            title: 'Clients',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
            closeAction: 'hide',
            floatable: false,
            titleCollapse: true,
            layout: {
                type: 'vbox'
            },
            cls:'menu-panel',
            items: [
                {
                    xtype: 'button',
                    text: 'All Clients',
                    width: 200,
                    itemId: 'all-customers',
                    handler: 'loadCustomers'
                },
                {
                    xtype: 'button',
                    text: 'New client',
                    width: 200,
                    itemId: 'new-customer-btn',
                    cls: 'button-style open'

                }
    ]

    }

//    {
//        xtype: 'panel',
//        title: 'Reports',
//        region: 'west',
//        width: 200,
//        collapsed: true,
//        collapseDirection: 'top',
//        collapsible: true,
//        closeAction: 'hide',
//        floatable: false,
//        cls:'menu-panel',
//        titleCollapse: true,
//        layout: {
//            type: 'vbox'
//        },
//            items: [
//                {
//                    xtype: 'button',
//                    text: 'Turnover of goods',
//                    width: 200,
//                    cls: 'button-style open',
//                    itemId: 'report-btn'
//                }
//            ]
//        }

    ]
});


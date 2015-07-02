Ext.define('ProjectExtJs5.view.menu.Menu', {
    extend: 'Ext.panel.Panel',
    requires: [
        'ProjectExtJs5.view.main.MainController',
        'ProjectExtJs5.view.main.MainModel'
    ],

    xtype: 'app-menu',
    cls:'app-menu',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

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
            title: 'sale',
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
                    text: 'Invoice',
                    width: 200,
                    itemId: 'invoice-btn',
                    cls: 'button-style open'
                },
                {
                    xtype: 'button',
                    text: 'Return',
                    width: 200,
                    cls: 'button-style open',
                    itemId: 'return-btn'
//
                },
                {
                    xtype: 'button',
                    text: 'Reserve',
                    width: 200,
                    cls: 'button-style open',
                    itemId: 'reserve-btn'

                }
            ]
        },

        {
            xtype: 'panel',
            title: 'buying',
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
                    text: 'Purchase',
                    width: 200,
                    cls: 'button-style open',
                    itemId: 'purchase-btn'

                },
                {
                    xtype: 'button',
                    text: 'Return',
                    width: 200,
                    cls: 'button-style open',
                    itemId: 'buy-return-btn'

                }
            ]
        },
        {
            xtype: 'panel',
            title: 'warehouse',
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
                    cls: 'button-style open'

                },
                {
                    xtype: 'button',
                    text: 'Change availability',
                    width: 200,
                    cls: 'button-style open',
                    itemId: 'change-btn'

                }
//
            ]
        },
        {
            xtype: 'panel',
            title: 'payment',
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
                    text: 'Cash',
                    width: 200,
                    itemId: 'cash-btn',
                    cls: 'button-style open'

                },
                {
                    xtype: 'button',
                    text: 'Bank',
                    width: 200,
                    cls: 'button-style open',
                    itemId: 'bank-btn'

                }
            ]
        },

        {
            xtype: 'panel',
            title: 'clients',
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
                    text: 'New customer',
                    width: 200,
                    itemId: 'new-customer-btn',
                    cls: 'button-style open'

                },
                {
                    xtype: 'button',
                    text: 'All customers',
                    width: 200,
                    itemId: 'all-customers'

        }
    ]
    },

    {
        xtype: 'panel',
        title: 'Reports',
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
                    text: 'Reconciliation with customers',
                    width: 200,
                    itemId: 'invoice-btn',
                    cls: 'button-style open'
                },
                {
                    xtype: 'button',
                    text: 'Turnover of goods',
                    width: 200,
                    cls: 'button-style open'
                },
                {
                    xtype: 'button',
                    text: 'fdfd',
                    width: 200,
                    cls: 'button-style open'
                }
            ]
        }

    ]
});


Ext.define('ProjectExtJs5.view.main.Menu', {
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
    titleRotation: 'right',
    titleAlign: 'center',
    layout: {
        type: 'vbox'
    },
    items: [
        {
            xtype: 'panel',
            title: 'Sale',
            border: true,
            region: 'west',
            width: 200,
            collapseMode:"header",
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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
        },
        {
            xtype: 'panel',
            title: 'Invoice',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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
        },
        {
            xtype: 'panel',
            title: 'Buy',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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
        },
        {
            xtype: 'panel',
            title: 'Warehouse',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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
        },
        {
            xtype: 'panel',
            title: 'Paydesk',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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
        },

        {
            xtype: 'panel',
            title: 'Customers',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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
        },

        {
            xtype: 'panel',
            title: 'Reports',
            region: 'west',
            width: 200,
            collapsed: true,
            collapseDirection: 'top',
            collapsible: true,
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
                    text: 'fff',
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

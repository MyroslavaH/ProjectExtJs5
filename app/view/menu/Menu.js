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
            cls:'menu-panel',
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

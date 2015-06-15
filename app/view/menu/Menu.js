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
//                    handler: 'onInvoiceBtnClick'
//                    handler : function(){
//                        var invoiceContainer = new Ext.Window({
//                            itemid: 'invoice-container',
//                            title: 'Invoices',
//                            closable: true,
//                            plain: true,
//                            layout: 'fit',
//                            closeAction: 'hide',
//                            items: [
//                                {xtype: 'invoice-container'}
//                            ]
//                        });
//                        invoiceContainer.show();
//                    }


                },
                {
                    xtype: 'button',
                    text: 'Return',
                    width: 200,
                    cls: 'button-style open',
                    handler : function(){
                        var returnContainer = new Ext.Window({
                            itemId: 'return-container',
                            title: 'Return Invoices',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'return-container'}
                            ]
                        });
                        returnContainer.show();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Reserve',
                    width: 200,
                    cls: 'button-style open',
                    handler : function(){
                        var reserveContainer = new Ext.Window({
                            itemId: 'reserve-container',
                            title: 'Reserves',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'reserve-container'}
                            ]
                        });
                        reserveContainer.show();
                    }
                }
            ]
        },
//        {
//            xtype: 'panel',
//            title: 'Invoice',
//            region: 'west',
//            cls:'menu-panel',
//            width: 200,
//            collapsed: true,
//            collapseDirection: 'top',
//            collapsible: true,
//            closeAction: 'hide',
//            floatable: false,
//            titleCollapse: true,
//            layout: {
//                type: 'vbox'
//            },
//            items: [
//                {
//                    xtype: 'button',
//                    text: 'Invoice',
//                    width: 200,
//                    itemId: 'invoice-btn',
//                    cls: 'button-style open'
//                },
//                {
//                    xtype: 'button',
//                    text: 'fff',
//                    width: 200,
//                    cls: 'button-style open'
//                },
//                {
//                    xtype: 'button',
//                    text: 'fdfd',
//                    width: 200,
//                    cls: 'button-style open'
//                }
//            ]
//        },
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
                    text: 'Purchase',
                    width: 200,
                    itemId: 'invoice-btn',
                    cls: 'button-style open',
                    handler : function(){
                        var purchaseContainer = new Ext.Window({
                            itemid: 'purchase-container',
                            title: 'Purchases',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'purchase-container'}
                            ]
                        });
                        purchaseContainer.show();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Return',
                    width: 200,
                    cls: 'button-style open',
                    handler : function(){
                        var buyReturnContainer = new Ext.Window({
                            itemid: 'buy-return-container',
                            title: 'Purchases Return',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'buy-return-container'}
                            ]
                        });
                        buyReturnContainer.show();
                    }

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
                    itemId: 'invoice-btn',
                    cls: 'button-style open',
                    handler : function(){
                        var goodsContainer = new Ext.Window({
                            itemid: 'goods-container',
                            title: 'All Goods',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'goods-container'}
                            ]
                        });
                        goodsContainer.show();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Change availability',
                    width: 200,
                    cls: 'button-style open'
                }
//                {
//                    xtype: 'button',
//                    text: 'fdfd',
//                    width: 200,
//                    cls: 'button-style open'
//                }
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
                    text: 'Cash',
                    width: 200,
                    itemId: 'invoice-btn',
                    cls: 'button-style open',
                    handler : function(){
                        var cashContainer = new Ext.Window({
                            itemid: 'cash-container',
                            title: 'Cash',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'cash-container'}
                            ]
                        });
                        cashContainer.show();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Bank',
                    width: 200,
                    cls: 'button-style open',
                    handler : function(){
                        var bankContainer = new Ext.Window({
                            itemid: 'bank-container',
                            title: 'Bank',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'bank-container'}
                            ]
                        });
                        bankContainer.show();
                    }
                }
//                {
//                    xtype: 'button',
//                    text: 'fdfd',
//                    width: 200,
//                    cls: 'button-style open'
//                }
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
                    text: 'New customer',
                    width: 200,
                    itemId: 'invoice-btn',
                    cls: 'button-style open',
                    handler : function(){
                        var createCustomer = new Ext.Window({
                            itemid: 'new-customer',
                            title: 'Create New Customer',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'new-customer'}
                            ]
                        });
                        createCustomer.show();
                    }
                },
                {
                    xtype: 'button',
                    text: 'All customers',
                    width: 200,
                    handler : function(){
                        var allCustomer = new Ext.Window({
                            itemid: 'all-customers',
                            title: 'List Of Customers',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'all-customers'}
                            ]
                        });
                        allCustomer.show();
                    }


//                    ctrl:{},
//
//                    alias: 'widget.all-customers',
//                    resizeTabs: true,
//                    extend: 'Ext.tab.Panel',
//
//                    handler: function(data){
//                        var itemId = data.id;
//                        var tab = this.getComponent(itemId); // поиск закладки с itemId = data.id
//                        if (tab) {tab.show();return;} // если закладка  существует, она открывается
//                        tab = this;
//                        tab.add( // добавляю закладку
//                            {
//                                itemId: 'all-customers',
//                                data: data,
//                                iconCls: 'tabs',
//                                closable: true})
//                            .show();
//                    }
//                    handler : function(){
//                        var allCustomers = new Ext.Tab({
//                            itemid: 'all-customers',
//                            title: 'List Of Customers',
//                            closable: true,
//                            plain: true,
//                            layout: 'fit',
//                            closeAction: 'hide',
//                            items: [
//                                {xtype: 'all-customers'}
//                            ]
//                        });
//                        allCustomers.show();
//                    }



        }
//                {
//                    xtype: 'button',
//                    text: 'fdfd',
//                    width: 200,
//                    cls: 'button-style open'
//                }
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


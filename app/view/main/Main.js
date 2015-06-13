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
        'ProjectExtJs5.view.main.NewCustomer',
        'ProjectExtJs5.view.main.AllCustomers',
        'ProjectExtJs5.view.main.InvoiceGrid',
        'ProjectExtJs5.view.main.InvoiceContainer',
        'ProjectExtJs5.view.main.NewInvoice',
        'ProjectExtJs5.view.main.ReturnContainer',
        'ProjectExtJs5.view.main.ReturnGrid',
        'ProjectExtJs5.view.main.NewReturn',
        'ProjectExtJs5.view.main.ReserveContainer',
        'ProjectExtJs5.view.main.ReserveGrid',
        'ProjectExtJs5.view.main.NewReserve',
        'ProjectExtJs5.view.main.PurchaseContainer',
        'ProjectExtJs5.view.main.PurchaseGrid',
        'ProjectExtJs5.view.main.NewPurchase',
        'ProjectExtJs5.view.main.PurchaseReturnContainer',
        'ProjectExtJs5.view.main.PurchaseReturnGrid',
        'ProjectExtJs5.view.main.NewPurchaseReturn',
        'ProjectExtJs5.view.main.GoodsContainer',
        'ProjectExtJs5.view.main.GoodsGrid',
        'ProjectExtJs5.view.main.NewGoods',
        'ProjectExtJs5.view.main.CashContainer',
        'ProjectExtJs5.view.main.CashGrid',
        'ProjectExtJs5.view.main.BankContainer',
        'ProjectExtJs5.view.main.BankGrid'

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
                items: [
                    {
                    title: 'Tab 1',
                    bodyPadding: 20,
                    html: '<h2>Content...</h2>'
                    },
//                    {
//                    title: 'The Data',
//                    layout: 'fit',
//                    closable: true,
//                    items: [{
//                        xtype: 'grid',
//                        title: 'Simpsons',
//                        store: {
//                            fields:['name', 'email', 'phone'],
//                            data:[
//                                { name: 'Lisa',  email: "lisa@simpsons.com",
//                                    phone: "555-111-1224"  },
//                                { name: 'Bart',  email: "bart@simpsons.com",
//                                    phone: "555-222-1234" },
//                                { name: 'Homer', email: "home@simpsons.com",
//                                    phone: "555-222-1244"  },
//                                { name: 'Marge', email: "marge@simpsons.com",
//                                    phone: "555-222-1254"  }
//                            ],
//                            proxy: {
//                                type: 'memory'
//                            }
//                        },
//                        columns: [
//                            { text: 'Name',  dataIndex: 'name' },
//                            { text: 'Email', dataIndex: 'email', flex: 1},
//                            { text: 'Phone', dataIndex: 'phone' }
//                        ]
//                    }
//        ]
//                    }
//                    {
//                        xtype: 'all-customers',
//                        layout: 'fit',
//                        closable: true
////                        itemId: 'all-sellers'
//
//                    }
//                    {
//                        title: 'all',
//                        xtype: 'all-customers'
//                    }
//                    {
//                        flex: 1,
//                        xtype: 'invoice-grid'
//                    }


                ]
//            {
//                xtype: 'new-customer'
//            }



}]
});

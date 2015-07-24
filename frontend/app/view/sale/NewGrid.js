/**
 * Created by Myroslava on 13.06.2015.
 */
Ext.define('ProjectExtJs5.view.sale.NewGrid', {
    requires: [
        'Ext.grid.RowNumberer'
        //'ProjectExtJs5.store.NewInvoiceStore'
    ],
    extend: 'Ext.grid.Panel',
    xtype: 'new-grid',
    itemId: 'new-grid',
    store: Ext.create('ProjectExtJs5.store.NewInvoiceStore'),
    columns: [
        {
            xtype: 'rownumberer',
            text: '№',
            width: 50
        },
        { text: 'Goods',  dataIndex: 'goods', flex: 1 },
        { text: 'Amount', dataIndex: 'amount',flex: 1},
        { text: 'Price', dataIndex: 'price',flex: 1  },
        { text: 'Sum', dataIndex: 'sum',flex: 1 }
    ],
    height: 150,
    flex: 1,
    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});

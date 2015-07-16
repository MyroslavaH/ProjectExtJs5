/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.ReserveGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'reserve-grid',
    itemId: 'reserve-grid',
    store: Ext.create('ProjectExtJs5.store.NewReturnStore'),
    columns: [
        { text: '№',  dataIndex: 'number', width: 50},
        { text: 'Goods',  dataIndex: 'goods', flex: 1 },
        { text: 'Amount', dataIndex: 'amount',flex: 1},
        { text: 'Price', dataIndex: 'price',flex: 1  },
        { text: 'Sum', dataIndex: 'sum',flex: 1 }
    ],
    height: 450,
    flex: 1,
    renderTo: Ext.getBody()
});

/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.ReserveGrid', {

    extend: 'Ext.grid.Panel',
    title: 'All Reserves',
    xtype: 'reserve-grid',
    itemId: 'reserve-grid',
    store: Ext.create('ProjectExtJs5.store.NewReturnStore'),
    columns: [
        { text: 'Number',  dataIndex: 'number', width: 100},
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Sum', dataIndex: 'sum',flex: 1 },
        { text: 'Currency', dataIndex: 'currency',width: 100 },
        { text: 'Date', dataIndex: 'date',width: 100 },
        { text: 'About', dataIndex: 'about',flex: 1}
    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody()
});

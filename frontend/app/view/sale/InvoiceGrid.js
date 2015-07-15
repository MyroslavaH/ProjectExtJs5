/**
 * Created by Myroslava on 11.06.2015.
 */
Ext.define('ProjectExtJs5.view.sale.InvoiceGrid', {

    extend: 'Ext.grid.Panel',
    title: 'All Invoices',
    xtype: 'invoice-grid',
    itemId: 'invoice-grid',
    store: Ext.create('ProjectExtJs5.store.InvoiceGrid'),
    columns: [
        { text: '№',  dataIndex: 'number', width: 50},
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Sum', dataIndex: 'sum',flex: 1},
        { text: 'Date', dataIndex: 'date',flex: 1  }
    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody()
});



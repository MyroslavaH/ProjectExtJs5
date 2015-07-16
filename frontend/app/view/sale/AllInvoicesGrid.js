/**
 * Created by Myroslava on 11.06.2015.
 */
Ext.define('ProjectExtJs5.view.sale.AllInvoicesGrid', {
    requires: [
        'Ext.grid.RowNumberer'
    ],
    extend: 'Ext.grid.Panel',
    title: 'All Invoices',
    xtype: 'all-invoices-grid',
    reference: 'all-invoices-grid',
    store: Ext.getStore('ProjectExtJs5.store.InvoiceGrid'),

    columns: [
        {
            xtype: 'rownumberer',
            width:40
        },
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Sum', dataIndex: 'sum',flex: 1},
        { text: 'Date', dataIndex: 'date',flex: 1  }
    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});



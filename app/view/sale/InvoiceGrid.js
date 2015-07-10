/**
 * Created by Myroslava on 11.06.2015.
 */
Ext.define('ProjectExtJs5.view.sale.InvoiceGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'ProjectExtJs5.store.InvoiceGrid'
    ],
    title: 'All Invoices',
    xtype: 'invoice-grid',
    itemId: 'invoice-grid',
    alias: 'widget.invoice-grid',
    store: 'ProjectExtJs5.store.InvoiceGrid',
//    store: Ext.data.StoreManager.lookup('invoiceStore'),
    columns: [
        { text: 'Number',  dataIndex: 'numberOfInvoice', width: 100},
        { text: 'First Name',  dataIndex: 'firstName', flex: 1 },
        { text: 'Last Name',  dataIndex: 'lastName', flex: 1 },
        { text: 'Sum', dataIndex: 'sum',flex: 1 },
        { text: 'Currency', dataIndex: 'currency',width: 100 },
        { text: 'Date', dataIndex: 'date',width: 100 }

    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});



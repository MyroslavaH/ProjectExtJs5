/**
 * Created by Myroslava on 07.06.2015.
 */

Ext.define('ProjectExtJs5.model.InvoiceGridModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'numberOfInvoice', type: 'int'},
        { name: 'invoiceDate', type: 'Date'},
        { name: 'customerName', type: 'string'},
        { name: 'sum', type: 'int'},
        { name: 'comments', type: 'string'}

    ]
});
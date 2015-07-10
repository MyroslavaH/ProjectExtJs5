/**
 * Created by Myroslava on 07.06.2015.
 */

Ext.define('ProjectExtJs5.model.InvoiceGridModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'numberOfInvoice', type: 'int'},
        { name: 'firstName', type: 'string'},
        { name: 'lastName', type: 'string'},
        { name: 'sum', type: 'int'},
        {name: 'currency', type:"string"}
     //   { name: 'invoiceDate', type: 'Date'}
//        { name: 'comments', type: 'string'}

    ]
});

/**
 * Created by Myroslava on 07.06.2015.
 */

Ext.define('ProjectExtJs5.model.InvoiceGridModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name', type: 'string'},
        { name: 'sum', type: 'int'},
         {name: 'date', type:'date'}
     //   { name: 'invoiceDate', type: 'Date'}
//        { name: 'comments', type: 'string'}

    ]
});

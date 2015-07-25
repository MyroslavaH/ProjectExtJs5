///**
// * Created by Myroslava on 19.06.2015.
// */
Ext.define('ProjectExtJs5.model.NewInvoiceModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'number', type: 'int' },
        { name: 'goods', type: 'string' },
        { name: 'amount', type: 'int' },
        { name: 'price', type: 'int' },
        { name: 'sum', type: 'int' }
    ]
});
/**
 * Created by Myroslava on 07.06.2015.
 */

Ext.define('ProjectExtJs5.store.InvoiceGrid', {
    extend: 'Ext.data.Store',
    model: 'ProjectExtJs5.model.InvoiceGridModel',
//    data:{'items':[
//        { 'number': '243', 'name': 'Lisa', "sum":"224", "currency": "UAH", "date": "01/06/2015", "about": "bhjcdsc" },
//        { 'number': '233', 'name': 'Bart', "sum":"1234", "currency": "USD", "date": "05/06/2015", "about": "bttttjcdsc" },
//        { 'number': '243', 'name': 'Homer', "sum":"555", "currency": "EUR", "date": "02/06/2015", "about": "bhjcdccsc"  },
//        { 'number': '243', 'name': 'Marge', "sum":"554", "currency": "EUR", "date": "10/06/2015", "about": "bhjcdsyc"  }
//    ]}

//    model: 'ProjectExtJs5.model.InvoiceGridModel',
//    autoLoad: false,
    storeId: 'invoice-grid-store',
//    sorters: [{
//        property: 'numberOfInvoice',
//        direction: 'ASC'
//    }]

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '../InvoiceGrid.json',
        reader: {
            type: 'json',
            rootProperty: 'invoice-gr'
        }
    }

});
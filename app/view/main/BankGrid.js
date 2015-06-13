/**
 * Created by Myroslava on 13.06.2015.
 */


Ext.create('Ext.data.Store', {
    storeId:'bankStore',
    fields: ['number', 'name', 'sum', 'currency', 'about'],
    data:{'items':[
        { 'number': '243', "sum":"224", "currency": "UAH", "date": "01/06/2015", "about": "bhjcdsc" },
        { 'number': '233', "sum":"1234", "currency": "USD", "date": "05/06/2015", "about": "bttttjcdsc" },
        { 'number': '243', "sum":"555", "currency": "EUR", "date": "02/06/2015", "about": "bhjcdccsc"  },
        { 'number': '243', "sum":"554", "currency": "EUR", "date": "10/06/2015", "about": "bhjcdsyc"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

Ext.define('ProjectExtJs5.view.main.BankGrid', {

    extend: 'Ext.grid.Panel',
    title: 'Unpaid Invoices',
    xtype: 'bank-grid',
    itemid: 'bank-grid',
    store: Ext.data.StoreManager.lookup('bankStore'),
    columns: [
        { text: 'Number',  dataIndex: 'number', width: 100},
        { text: 'Sum', dataIndex: 'sum',flex: 1 },
        { text: 'Currency', dataIndex: 'currency',width: 100 },
        { text: 'Date', dataIndex: 'date',width: 100 },
        { text: 'About', dataIndex: 'about',flex: 1}
    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody()
});

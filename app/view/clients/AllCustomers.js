/**
 * Created by Myroslava on 11.06.2015.
 */

Ext.create('Ext.data.Store', {
    storeId:'simpsonsStore',
    fields: ['idCustomer', 'first name', 'last name', 'phone'],
    data:{'items':[
        {'idCustomer':'2', 'first name': 'Lisa', 'last name': 'gfgf',"phone":"555-111-1224" },
        {'idCustomer':'2', 'first name': 'Bart', 'last name': 'gfghgf', "phone":"555-222-1234" },
        {'idCustomer':'2', 'first name': 'Homer', 'last name': 'gghhfgf', "phone":"555-222-1244"},
        {'idCustomer':'2', 'first name': 'Marge', 'last name': 'gghfgf', "phone":"555-222-1254" }
    ]},
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('ProjectExtJs5.view.clients.AllCustomers', {
    extend: 'Ext.grid.Panel',
    xtype: 'all-customers',
    itemId: 'all-customers',
    alias: 'widget.all-customers',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { id: 'idCustomer',  dataIndex: 'idCustomer', flex: 1 },
        { text: 'First Name',  dataIndex: 'first name', flex: 1 },
        { text: 'Last Name',  dataIndex: 'last name', flex: 1 },
        { text: 'Phone', dataIndex: 'phone',flex: 1 }
    ],
    height: 600,
    width: 700,
    renderTo: Ext.getBody()
});

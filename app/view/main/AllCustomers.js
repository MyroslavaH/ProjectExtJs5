/**
 * Created by Myroslava on 11.06.2015.
 */

Ext.create('Ext.data.Store', {
    storeId:'simpsonsStore',
    fields: ['name', 'phone','about'],
    data:{'items':[
        { 'name': 'Lisa', "phone":"555-111-1224", "about": "bhjcdsc" },
        { 'name': 'Bart', "phone":"555-222-1234", "about": "bhjcdsc" },
        { 'name': 'Homer', "phone":"555-222-1244", "about": "bhjcdsc"  },
        { 'name': 'Marge', "phone":"555-222-1254", "about": "bhjcdsc"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

Ext.define('ProjectExtJs5.view.main.AllCustomers', {
    extend: 'Ext.grid.Panel',
    title: 'Simpsons',
    xtype: 'all-customers',
    itemid: 'all-customers',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Phone', dataIndex: 'phone',flex: 1 },
        { text: 'About', dataIndex: 'about',flex: 1}
    ],
    height: 600,
    width: 700,
    renderTo: Ext.getBody()
});

/**
 * Created by Myroslava on 11.06.2015.
 */
Ext.define('ProjectExtJs5.view.clients.AllCustomers', {
    requires: [
        'Ext.grid.RowNumberer',
        'ProjectExtJs5.store.CustomerStore'
    ],
    extend: 'Ext.grid.Panel',
    title: 'All Customers',
    xtype: 'all-customers',
    reference: 'all-customers',
    store: Ext.getStore('ProjectExtJs5.store.CustomerStore'),
    columns: [
        {
            xtype: 'rownumberer',
            text: '№',
            width:80
        },

        { text: 'Name',
            dataIndex: 'lastName',
            renderer: function(lastName, metaData ) {
                var firstName = metaData.record.data.firstName;

                return firstName +"  "+ lastName
        },
            flex: 1 },
        { text: 'Phone',  dataIndex: 'phone', flex: 1 }
    ],
    height: 700,
    width: 800,
    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});


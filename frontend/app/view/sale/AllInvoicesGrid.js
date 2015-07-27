/**
 * Created by Myroslava on 11.06.2015.
 */
Ext.define('ProjectExtJs5.view.sale.AllInvoicesGrid', {
    requires: [
        'Ext.grid.RowNumberer',
        'ProjectExtJs5.store.InvoiceGrid'
    ],
    extend: 'Ext.grid.Panel',
    title: 'All Invoices',
    xtype: 'all-invoices-grid',
    reference: 'all-invoices-grid',
    store: Ext.getStore('ProjectExtJs5.store.InvoiceGrid'),
    columns: [
        {
            xtype: 'rownumberer',
            width:40,
            text: '№'
        },
        { text: 'Name',  dataIndex: 'name',
        flex: 1 },
        { text: 'Sum', dataIndex: 'sum',flex: 1},
        { text: 'Date', dataIndex: 'date',
            renderer: function(date ) {
                var dd = date.getDate();
                var mm = date.getMonth()+1;
                var yyyy = date.getFullYear();
                if(dd<10){
                    dd='0'+dd
                }
                if(mm<10){
                    mm='0'+mm
                }
                return  dd+'/'+mm+'/'+yyyy;

            },
            flex: 1  }
    ],
    height: 550,
    width: 800,
    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});



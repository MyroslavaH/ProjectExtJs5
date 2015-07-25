/**
 * Created by Myroslava on 17.07.2015.
 */

Ext.define('ProjectExtJs5.view.reports.ReportGrid', {
    extend: 'Ext.grid.Panel',
    title: 'Turnover of goods',
    xtype: 'report-grid',
    itemId: 'report-grid',
    store: Ext.data.StoreManager.lookup('reportStore'),
    columns: [
        { text: '№ of invoice',  dataIndex: 'num-invoice', flex:1},
        { text: 'Name',  dataIndex: 'name', flex: 2 },
        { text: 'Price', dataIndex: 'price',flex: 2 }
    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody()
});

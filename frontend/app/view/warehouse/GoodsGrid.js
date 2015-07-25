/**
 * Created by Myroslava on 13.06.2015.
 */
Ext.define('ProjectExtJs5.view.warehouse.GoodsGrid', {
    requires: [
        'Ext.grid.RowNumberer',
        'ProjectExtJs5.store.GoodsStore'
    ],
    extend: 'Ext.grid.Panel',

    title: 'All Goods',
    xtype: 'goods-grid',
    itemId: 'goods-grid',
    reference: 'goods-grid',
    store: Ext.getStore('ProjectExtJs5.store.GoodsStore'),
    columns: [
        { xtype: 'rownumberer',
            text: '№',
            width:80},
        { text: 'Name of Goods',  dataIndex: 'good', flex: 1 },
        { text: 'Amount', dataIndex: 'amount',flex: 1 }
    ],

    renderTo: Ext.getBody(),

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});

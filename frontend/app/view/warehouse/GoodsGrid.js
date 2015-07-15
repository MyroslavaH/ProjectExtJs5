/**
 * Created by Myroslava on 13.06.2015.
 */



Ext.create('Ext.data.Store', {
    storeId:'goodsStore',
    fields: ['id', 'name', 'amount', 'about'],
    data:{'items':[
        { 'id': '43', 'name': 'milk', "amount":"2", "quantity": "l",  "about": "bcdsc" },
        { 'id': '23', 'name': 'butter', "amount":"1", "quantity": "kg",  "about": "ttjcdsc" },
        { 'id': '13', 'name': 'cugar', "amount":"55", "quantity": "kg",  "about": "bhjccsc"  },
        { 'id': '3', 'name': 'solt', "amount":"4", "quantity": "kg",  "about": "bhc"  }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

Ext.define('ProjectExtJs5.view.warehouse.GoodsGrid', {

    extend: 'Ext.grid.Panel',
    title: 'All Goods',
    xtype: 'goods-grid',
    itemid: 'goods-grid',
    store: Ext.data.StoreManager.lookup('goodsStore'),
    columns: [
        { text: 'Id',  dataIndex: 'id', width: 70},
        { text: 'Name of Goods',  dataIndex: 'name', flex: 1 },
        { text: 'Amount', dataIndex: 'amount',flex: 1 },
        { text: 'Quantity', dataIndex: 'quantity',flex: 1 },
        { text: 'About', dataIndex: 'about',flex: 1}
    ],
    height: 450,
    width: 800,
    renderTo: Ext.getBody()
});

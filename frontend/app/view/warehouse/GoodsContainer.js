/**
 * Created by Myroslava on 13.06.2015.
 */

    Ext.define('ProjectExtJs5.view.warehouse.GoodsContainer', {
        extend: 'Ext.panel.Panel',
        xtype:  'goods-container',
        layout: 'border',
        height: 500,
        width: 800,

    items: [
        {
            xtype: 'panel',
            layout: 'hbox',
            region: 'north',
            width: 700,
            height: 50,
            bodyPadding: 5,
            items: [
                {
                    xtype: 'button',
                    layout: 'vbox',
                    height: 40,
                    width: 150,
                    text: 'Create New Good',
                    itemId: 'new-goods'
                }
            ]
        },
        {
            xtype: 'goods-grid',
            region: 'north'
        }
    ],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.down('#new-goods').on('click', me.setFireEvent, me, 'new good')
    },
    setFireEvent: function(scope, el, title){
        this.fireEvent('openNewGoods', title)
    }
});
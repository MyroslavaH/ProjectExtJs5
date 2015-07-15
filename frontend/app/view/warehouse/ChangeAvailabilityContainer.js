/**
 * Created by Myroslava on 18.06.2015.
 */

Ext.define('ProjectExtJs5.view.warehouse.ChangeAvailabilityContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'change-goods-container',
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
                    width: 100,
                    text: 'Create New Goods',
                    itemId: 'new-goods'
                }
            ]
        },
        {
            xtype: 'goods-grid',
            region: 'north'
        }
    ]
});
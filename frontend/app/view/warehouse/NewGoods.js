/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.warehouse.NewGoods', {
        extend: 'Ext.form.Panel',
        xtype: 'new-good',
        renderTo: Ext.getBody(),
        itemId: 'new-good',
        defaults: {
            anchor: '100%'
        },
       // height: 550,
        width: 700,
        bodyPadding: 10,
        reference: 'newGood',
        items:[
            {
                xtype:'textfield',
                fieldLabel: 'Name',
                name: 'good',
                itemId: 'good'
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Amount',
                minValue: 1,
                name: 'amount',
                itemId: 'amount'

            },
            {
                xtype: 'button',
                text:'Add new good',
                itemId: 'newGood-btn',
                handler: 'addNewGood'
            }
        ],
        initComponent: function () {
            var me = this;
            me.callParent(arguments);
        }
    }
);
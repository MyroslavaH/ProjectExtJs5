/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.NewInvoice', {
        extend: 'Ext.panel.Panel',
        xtype: 'new-invoice',
        itemId: 'new-invoice',
        defaults: {
            anchor: '100%'
        },
        height: 600,
        width: 900,
        bodyPadding: 10,

        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        emptyText: 'Name',
                        width: 200
                    },
                    {
                        xtype: 'component',
                        width: 50
                    },
                    {
                        xtype:'datefield',
                        format: 'd / m / Y',
                        maxValue: new Date(),
                        emptyText: 'Date',
                        width: 200
                    }

                ]
            },
            {
                xtype: 'component',
                height: 20
            },
            {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items:[
                    {
                        xtype: "component",
                        width: 50
                    },
                    {
                        xtype:'textfield',
                        emptyText: 'goods',
                        allowBlank: false,
                        name: 'goods',
                        itemId: 'invoice-goods',
                        flex: 1
                    },
                    {
                        xtype: 'numberfield',
                        emptyText: 'choose amount',
                        itemId: 'invoice-amount',
                        name: 'amount',
                        flex: 1
                    },
                    {
                        xtype:'numberfield',
                        emptyText: 'price',
                        itemId: 'invoice-price',
                        allowBlank: false,
                        name: 'price',
                        flex: 1
                    },
                    {
                        xtype:'button',
                        text:"+",
                        itemId: 'add-new-invoice',
                        flex: 1,
                        height: 32
                    }
                ]},

            {
                xtype:'reserve-grid',
                itemId: 'new-grid',
//                data:[] ,
                store: Ext.create('ProjectExtJs5.store.NewReserveStore')
            },
            {xtype: 'button',
                handler:'submitNewInvoice'
            }
        ],


        initComponent: function () {
            var me = this;
            me.callParent(arguments);
            this.down('#add-new-invoice').setHandler('onAddNewInvoice', this)
        },

        onAddNewInvoice: function(){
            var store = this.down('#new-grid').getStore();
            var goods = this.down('#invoice-goods').getValue();
            var amount = this.down('#invoice-amount').getValue();
            var price = this.down('#invoice-price').getValue();
            var data = {
                goods:goods,
                price:price,
                amount:amount,
                sum: price*amount

            }
            store.add(data)
        }
    }
);
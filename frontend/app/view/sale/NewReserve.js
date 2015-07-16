///**
// * Created by Myroslava on 13.06.2015.
// */
//
//Ext.define('ProjectExtJs5.view.sale.NewReserve', {
//        extend: 'Ext.panel.Panel',
//        xtype: 'new-reserve',
//        itemId: 'new-reserve',
//        defaults: {
//            anchor: '100%'
//        },
//        height: 600,
//        width: 900,
//        controller: 'main',
//        bodyPadding: 10,
//
//        items: [
//            {
//                xtype: 'container',
//                layout: 'hbox',
//                items: [
//                    {
//                        xtype: 'textfield',
//                        emptyText: 'Name',
//                        width: 200
//                    },
//                    {
//                        xtype: 'component',
//                        width: 50
//                    },
//                    {
//                        xtype:'datefield',
//                        format: 'd / m / Y',
//                        maxValue: new Date(),
//                        emptyText: 'Date',
//                        width: 200
//                    }
//
//                ]
//            },
//            {
//                xtype: 'component',
//                height: 20
//            },
//            {
//                xtype: 'container',
//                layout: 'hbox',
//                flex: 1,
//                items:[
//                    {
//                        xtype: "component",
//                        width: 50
//                    },
//                    {
//                        xtype:'button',
//                        text:"Add",
//                        itemId: 'add-new-reserve',
//                        width: 50
//                    },
//
//                   {
//                        xtype:'textfield',
//                        emptyText: 'goods',
//                        allowBlank: false,
//                        name: 'goods',
//                        itemId: 'reserve-goods',
//                       flex: 1
//                    },
//                    {
//                        xtype: 'numberfield',
//                        emptyText: 'choose amount',
//                        itemId: 'reserve-amount',
//                        name: 'amount',
//                        flex: 1
//                    },
//                    {
//                        xtype:'numberfield',
//                        emptyText: 'price',
//                        itemId: 'reserve-price',
//                        allowBlank: false,
//                        name: 'price',
//                        flex: 1
//                    },
//                    {
//                        xtype:'button',
//                        text:"+",
//                        itemId: 'add-new-reserve',
//                        flex: 1,
//                        height: 32
//                    }
//                ]},
//
//            {
//                xtype:'reserve-grid',
//                itemId: 'reserve-grid',
////                data:[] ,
//                store: Ext.create('ProjectExtJs5.store.NewReserveStore')
//            },
//            {xtype: 'button',
//                handler:'submitNewReserve'
//            }
//        ],
//
//
//        initComponent: function () {
//            var me = this;
//            me.callParent(arguments);
//            this.down('#add-new-reserve').setHandler('onAddNewReserve', this)
//        },
//
//        onAddNewReserve: function(){
//            var store = this.down('#reserve-grid').getStore();
//            var goods = this.down('#reserve-goods').getValue();
//            var amount = this.down('#reserve-amount').getValue();
//            var price = this.down('#reserve-price').getValue();
//            var data = {
//                goods:goods,
//                price:price,
//                amount:amount,
//                sum: price*amount
//
//            }
//            store.add(data)
//        }
//    }
//);
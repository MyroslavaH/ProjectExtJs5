/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.NewInvoice', {
    requires: [
        'ProjectExtJs5.store.InvoiceGrid'
    ],
    extend: 'Ext.panel.Panel',
    xtype: 'new-invoice',
    itemId: 'new-invoice',
    defaults: {
        anchor: '100%'
    },
    height: 600,
    width: 900,
    bodyPadding: 10,
    reference: 'newInvoice',

    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    emptyText: 'Name',
                    width: 200,
                    itemId: 'name'
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
                    width: 200,
                    itemId: 'date'
                },
                {
                    xtype: 'component',
                    width: 50
                },
                {
                    xtype: 'textfield',
                    width: 200,
                    emptyText: 'Sum',
                    itemId: 'sum'
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
                    editable: true,
                    name: 'goods',
                    itemId: 'invoice-goods',
                    flex: 2
                },
                {
                    xtype: 'numberfield',
                    emptyText: 'choose amount',
                    editable: true,
                    itemId: 'invoice-amount',
                    name: 'amount',
                    minValue: 1,
                    flex: 2
                },
                {
                    xtype:'numberfield',
                    emptyText: 'price',
                    editable: true,
                    itemId: 'invoice-price',
                    allowBlank: false,
                    name: 'price',
                    minValue: 1,
                    flex: 2
                },
                {
                    xtype:'button',
                    text:"+",
                    itemId: 'add-new-invoice',
                    flex: 1,
                    height: 32
                },
                {
                    xtype:'button',
                    text:"-",
                    itemId: 'del-new-invoice',
                    flex: 1,
                    height: 32
                }
            ]},

        {
            xtype:'new-grid',
            itemId: 'new-grid',
            store: Ext.create('ProjectExtJs5.store.NewInvoiceStore')
        },
        {
            xtype: 'button',
            handler:'submitNewInvoice',
            text: 'OK'

        }
    ],


    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        this.down('#add-new-invoice').setHandler('onAddNewInvoice', this);
        //  this.down('#sum').setValue(data.sum)
        //поки що без мінуса
        //  this.down('#del-new-invoice').setHandler('onDelNewInvoice', this)
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
        };
        store.add(data);
        this.down('#sum').setValue(store.sum('sum'));
    }

//        onDelNewRowInvoice: function(){
//        console.log("ok")
//    }

});
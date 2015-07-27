/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.NewInvoice', {
    requires: [
        'ProjectExtJs5.store.InvoiceGrid',
        'ProjectExtJs5.store.GoodsStore',
        'ProjectExtJs5.store.CustomerStore'
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
                    xtype: 'combobox',
                    emptyText: 'Name',
                    store: 'ProjectExtJs5.store.CustomerStore',
                    queryMode: 'local',
                    displayField: 'firstName',
                    editable: true,
                    width: 200,
                    itemId: 'name',
                    renderTo: Ext.getBody(),
                    tpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '<div class="x-boundlist-item">{firstName} {lastName}</div>',
                        '</tpl>'
                    ),
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '{firstName} {lastName}',
                        '</tpl>'
                    )

                },
                {
                    xtype: 'label',
                    itemId: 'name-err',
                    hidden: true,
                    text: 'Enter name',
                    margin: '0 0 0 10'
                },
                {
                    xtype: 'component',
                    width: 50
                },
                {
                    xtype:'datefield',
                    format: 'd / m / Y',
                    value: new Date(),
                    emptyText: 'Date',
                    width: 200,
                    itemId: 'date'
                },
                {
                    xtype: 'component',
                    width: 50
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
                    xtype:'combobox',
                    emptyText: 'goods',
                    editable: true,
                    itemId: 'invoice-goods',
                    queryMode: 'local',
                    store: 'ProjectExtJs5.store.GoodsStore',
                    displayField: 'good',
                    renderTo: Ext.getBody(),
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
                    height: 32,
                    handler:'deleteRow'
                }
            ]},

        {
            xtype:'new-grid',
            itemId: 'new-grid',
            reference:'new-grid-invoice',
            store: Ext.create('ProjectExtJs5.store.NewInvoiceStore'),
            dockedItems: {
                xtype: 'textfield',
                dock: 'bottom',
                width: 200,
                emptyText: 'Sum',
                itemId: 'sum',
                disabled: true
            }

        },
        {
            xtype: 'button',
            handler:'submitNewInvoice',
            text: 'OK',
            width: 80,
            height: 30


        }
    ],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        this.down('#add-new-invoice').setHandler('onAddNewInvoice', this);
        //this.down('#invoice-goods').on("mouseclick", this.showCategoryData, this);
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
//    showCategoryData: function(){
//        this.getStore().load();
//    }

});


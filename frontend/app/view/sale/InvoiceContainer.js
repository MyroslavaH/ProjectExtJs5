/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.InvoiceContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'invoice-container',
    layout: 'border',
    reference: 'invoiceContainer',
    height: 500,
    width: 800,

    items: [
        {
            xtype: 'panel',
            layout: 'vbox',
            region: 'north',
            width: 700,
            bodyPadding: 5,
            items: [
                {
                    xtype: 'button',
                    layout: 'vbox',
                    height: 35,
                    width: 100,
                    itemId:'new-invoice-btn',
                    text: 'New Invoice'
                },
                {
                    xtype: 'component',
                    height: 10
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items:[
                        {
                            xtype: 'datefield',
                            itemId: 'beginDate',
                            anchor: '100%',
                            fieldLabel: 'Choose range',
                            name: 'from_date',
                            value: new Date(),
                            maxValue: new Date(),
                            format: 'd m Y'
                        },
                        {
                            xtype: 'component',
                            width: 20
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'endDate',
                            anchor: '100%',
                            name: 'to_date',
                            value: new Date(),
                            maxValue: new Date(),
                            format: 'd m Y'
                        },
                        {
                            xtype: 'component',
                            width: 20
                        },
                        {
                            xtype: 'button',
                            text: 'Filer',
                            height: 35,
                            width: 100,
                            handler: 'chooseRange'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'all-invoices-grid',
            region: 'north'
        }
    ],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.down('#new-invoice-btn').on('click', me.setFireEvent, me, 'new invoice')
    },
    setFireEvent: function(scope, el, title){
        this.fireEvent('openNewInvoice', title)
    }
});

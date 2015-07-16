/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.InvoiceContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'invoice-container',
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
                    itemId:'new-invoice-btn',
                    text: 'New Invoice'
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Choose range',
                    name: 'from_date',
                    maxValue: new Date(),
                    format: 'd m Y'
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    name: 'to_date',
                    value: new Date(),
                    format: 'd m Y'
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

/**
 * Created by Myroslava on 13.06.2015.
 */


Ext.define('ProjectExtJs5.view.buying.PurchaseContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'purchase-container',
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
//                    region: 'center',
                    height: 40,
                    width: 100,
                    text: 'New Purchase',
                    handler : function(){
                        var newInvoice = new Ext.Window({
                            itemid: 'new-purchase',
                            title: 'New Purchase',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'new-purchase'}
                            ]
                        });
                        newInvoice.show();
                    }

                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Choose range',
                    name: 'from_date',
                    maxValue: new Date(),// limited to the current date or prior
                    format: 'd m Y'
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
//                            fieldLabel: 'To',
                    name: 'to_date',
                    value: new Date(), // defaults to today
                    format: 'd m Y'
                }

            ]
        },

        {
            xtype: 'purchase-grid',
            region: 'north'
        }
    ]
});
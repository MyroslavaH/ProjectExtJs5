/**
* Created by Myroslava on 13.06.2015.
*/

Ext.define('ProjectExtJs5.view.sale.ReturnContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'return-container',
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
                    text: 'New return',
                    handler : function(){
                        var newInvoice = new Ext.Window({
                            itemId: 'new-return',
                            title: 'New Return',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'new-return'}
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
//
       {
            xtype: 'return-grid',
            region: 'north'
        }
    ]
});
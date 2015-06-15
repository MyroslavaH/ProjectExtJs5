/**
* Created by Myroslava on 13.06.2015.
*/

Ext.define('ProjectExtJs5.view.main.ReturnContainer', {
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
//                    region: 'center',
                    height: 40,
                    width: 100,
                    text: 'New return',
                    handler : function(){
                        var newInvoice = new Ext.Window({
                            itemid: 'new-return',
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
//
       {
            xtype: 'return-grid',
            region: 'north'
        }
    ]
});
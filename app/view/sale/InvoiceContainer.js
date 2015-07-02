Ext.define('ProjectExtJs5.view.sale.InvoiceContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'invoice-container',
    itemId: 'invoice-container',
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
                    text: 'New Invoice',
                    height: 40,
                    width: 100,
                    itemId: 'new-invoice'
//                    handler : function(){
//                        var newInvoice = new Ext.Window({
//                            itemId: 'new-invoice',
//                            title: 'New Invoice',
//                            closable: true,
//                            plain: true,
//                            layout: 'fit',
//                            closeAction: 'hide',
//                            items: [
//                                {xtype: 'new-invoice'}
//                            ]
//                        });
//                        newInvoice.show();
//                    }


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
            xtype: 'invoice-grid',
            region: 'north'
        }


    ]




});
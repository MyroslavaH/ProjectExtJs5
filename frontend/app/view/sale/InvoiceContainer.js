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
                    itemId: 'new-invoice',
                    handler : function(){
                        var newInvoice = new Ext.window.Window({
                            itemId: 'new-invoice',
                            title: 'New Invoice',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'new-invoice'}
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
        {
//            xtype: 'invoice-grid',
  //          region: 'north'
        }


    ],

    initComponent: function () {
        var me = this;
        me.callParent(arguments);
//    me.down('#new-invoice').on('click', me.setFireEvent, me, 'new invoice')
//},
//setFireEvent: function(scope, el, title){
//    var tapPanel = this.down('#tapPanelLink');
//    this.down('#tapPanelLink').fireEvent('openContainer', tapPanel, title)
}




});
/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.ReserveContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'reserve-container',
    layout: 'border',
    height: 500,
    flex: 1,
    controller: 'main',

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
                    itemId:'new-reserve-btn',
                    text: 'New Reserve',
                    handler : function(){
                        var newInvoice = new Ext.Window({
                            itemId: 'new-reserve',
                            title: 'New Reserve',
                            closable: true,
                            plain: true,
                            layout: 'fit',
                            closeAction: 'hide',
                            items: [
                                {xtype: 'new-reserve'}
                            ]
                        });
                        newInvoice.show();
                    }

                }

            ]
        },

        {
            xtype: 'invoice-grid',
            region: 'north'
        }
    ],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
//        me.down('#new-reserve-btn').on('click', me.setFireEvent, me, 'new reserve')
    }
//    setFireEvent: function(scope, el, title){
//        var tapPanel = Ext.get('tapPanelLink').component;
//        tapPanel.fireEvent('openContainer', tapPanel, title)
//    }
});

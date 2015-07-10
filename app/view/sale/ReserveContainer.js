/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.ReserveContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'reserve-container',
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
            xtype: 'reserve-grid',
            region: 'north'
        }
    ]
//    initComponent: function () {
//        var me = this;
//        me.callParent(arguments);
//        me.down('#new-reserve').on('click', me.setFireEvent, me, 'new return')
//    },
//    setFireEvent: function(scope, el, title){
//        var tapPanel = this.down('#tapPanelLink');
//        this.down('#tapPanelLink').fireEvent('openContainer', tapPanel, title)
//    }
});
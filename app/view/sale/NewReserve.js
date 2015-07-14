/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.NewReserve', {
        extend: 'Ext.panel.Panel',

        xtype: 'new-reserve',
        // renderTo: Ext.getBody(),
        itemId: 'new-reserve',
//        layout: 'border',
        defaults: {
            anchor: '100%'
        },
        height: 500,
        width: 700,

        bodyPadding: 10,


        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items:[
                    {
                        xtype:'textfield',
                        emptyText: 'Name',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'name',
                        itemId: 'reserve-name',
                        anchor:'95%'
                    }, {
                        xtype: 'datefield',
                        emptyText: 'Choose date',
                        maxValue: new Date(),// limited to the current date or prior
                        format: 'd / m / Y',
                        itemId: 'reserve-date',
                        name: 'date',
                        anchor:'95%'
                    },{
                        xtype:'textfield',
                        emptyText: 'Phone',
                        itemId: 'reserve-phone',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'phone',
                        anchor:'100%'
                    },{
                        xtype:'textfield',
                        emptyText: 'Description',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        itemId: 'reserve-about',
                        name: 'description',
                        anchor:'100%'
                    },
                    {
                        xtype:'button',
                        text:"Add",
                        itemId: 'add-new-reserve'
                    }
                ]},

            {
                xtype:'reserve-grid',
                itemId: 'reserve-grid',
//                data:[] ,
                store: Ext.create('ProjectExtJs5.store.NewReserveStore')
            }]     ,

        initComponent: function () {
            var me = this;
            me.callParent(arguments);
            this.down('#add-new-reserve').setHandler('onAddNewReserve', this)
        },

        onAddNewReserve: function(){
            var store = this.down('#reserve-grid').getStore();
            var name = this.down('#reserve-name').getValue();
            var date = this.down('#reserve-date').getValue();
            var phone = this.down('#reserve-phone').getValue();
            var about = this.down('#reserve-about').getValue();
            var data = {
                goods:name,
                phone:phone,
                date:date,
                about: about

            }
            store.add(data)
        }
    }
);
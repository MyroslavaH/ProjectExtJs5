/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.main.CashContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'cash-container',
    layout: 'border',
    height: 500,
    width: 800,

    items: [
        {
            xtype: 'panel',
            layout: 'hbox',
            region: 'north',
            width: 700,
            height: 120,
            bodyPadding: 5,
            items:
                [{
                    xtype: 'container',
                    flex: 1,
                    layout: 'anchor',
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'Name',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'name',
                        anchor:'95%'
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Choose date',
                        maxValue: new Date(),// limited to the current date or prior
                        format: 'd / m / Y',
                        name: 'date',
                        anchor:'95%'
                    }]
                },{
                    xtype: 'container',
                    flex: 1,
                    layout: 'anchor',
                    items: [{
                        xtype:'textfield',
                        fieldLabel: 'Currency',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'currency',
                        anchor:'100%'
                    },{
                        xtype:'textfield',
                        fieldLabel: 'Description',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'description',
                        anchor:'100%'
                    }]
                }]


        },

        {
            xtype: 'cash-grid',
            region: 'north'
        }
    ]
});
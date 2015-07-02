/**
 * Created by Myroslava on 13.06.2015.
 */


Ext.define('ProjectExtJs5.view.payment.BankContainer', {
    extend: 'Ext.panel.Panel',
    xtype:  'bank-container',
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
                        fieldLabel: 'Bank Account',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'bank account',
                        anchor:'100%'
                    },{
                        xtype:'textfield',
                        fieldLabel: 'Currency',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'currency',
                        anchor:'100%'
                    }]
                }]


        },

        {
            xtype: 'bank-grid',
            region: 'north'
        }
    ]
});
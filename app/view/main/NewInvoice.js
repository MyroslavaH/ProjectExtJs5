/**
 * Created by Myroslava on 12.06.2015.
 */

Ext.define('ProjectExtJs5.view.main.NewInvoice', {
        extend: 'Ext.form.Panel',

        xtype: 'new-invoice',
        renderTo: Ext.getBody(),
        itemId: 'new-invoice',
//        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        height: 500,
        width: 700,
        bodyPadding: 10,
//        collapsible: true,
//        frame: true,
//        fieldDefaults: {
//            labelAlign: 'top',
//            msgTarget: 'side'
//        },
        layout: 'vbox',
        items: [
            {
                xtype: 'container',
//            anchor: '100%',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'name',
                        anchor: '95%'
                    },

                    {
                        xtype: 'datefield',
                        fieldLabel: 'Choose date',
                        maxValue: new Date(),// limited to the current date or prior
                        format: 'd / m / Y',
                        name: 'date',
                        anchor: '95%'
                    }
                ]
            },
            {
                xtype: 'component',
                height: 20
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Phone',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'phone',
                        anchor: '100%'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Description',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'description',
                        anchor: '100%'
                    }
                ]
            },
            {
                xtype: 'component',
                height: 20
            }
//
        ],






        buttons: [{
            text: 'Reset',
            handler: function() {
                this.up('form').getForm().reset();
            }
        },
            {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        form.submit({
                            success: function(form, action) {
                                Ext.Msg.alert('Success', action.result.msg);
                            },
                            failure: function(form, action) {
                                Ext.Msg.alert('Failed', action.result.msg);
                            }
                        });
                    }
                }
            }]

    }
);
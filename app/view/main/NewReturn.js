/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.main.NewReturn', {
        extend: 'Ext.form.Panel',

        xtype: 'new-return',
        renderTo: Ext.getBody(),
        itemId: 'new-return',
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
        layout: "vbox",

        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
//                afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'name',
                        anchor: '98% 10%'
                    },
                    {
                        xtype: 'component',
                        width: 60
                    },

                    {
                        xtype: 'datefield',
                        fieldLabel: 'Choose date',
                        maxValue: new Date(),// limited to the current date or prior
                        format: 'd / m / Y',
                        name: 'date',
                        anchor: '98% 10%'
                    }
                ]
            },
            {
                xtype: 'component',
                height: 20
            },
            {
                xtype: "container",
//                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Phone',
//                      afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'phone',
                        anchor: '100%'
                    },
                    {
                        xtype: 'component',
                        width: 60
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Description',
//                      afterLabelTextTpl: 'required',
                        allowBlank: false,
                        name: 'description',
                        anchor: '100%'
                    }
                ]
            },
            {
                xtype: 'component',
                height: 20
            },
            {
                xtype: 'container',
                height: 40,
//                region: 'north',
                items: [
                    {
                        xtype: 'button',
                        width: 100,
                        itemId: 'create',
                        text: 'Add'
                    }
                ]
            },
            {
                xtype: 'container',
                layout:  'column',
                width: 350,
                height: 100,

                items: [
                    {
                        title: '№',
                        columnWidth: '0.2',
                        layout: 'hbox'

                    },
                    {
                        title: 'Goods',
                        columnWidth: '0.5',
                        layout: 'hbox'
                    },
                    {
                        title: 'Value',
                        columnWidth: '0.3',
                        layout: 'hbox'
                    }

                ]
            },
            {
                xtype: 'container',
                height: 50,
                width: 300,
//                anchor: '95% 10%',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'textfield',
                        width: 30,
                        layout: 'hbox'

                    },
                    {
                        xtype: 'combo',
                        width: 100,
                        layout: 'hbox'
                    },
                    {
                        xtype: 'numberfield',
                        layout: 'hbox',
                        width: 40
                    }
                ]

            }














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
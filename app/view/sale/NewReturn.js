/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.sale.NewReturn', {
        extend: 'Ext.form.Panel',

        xtype: 'new-return',
        renderTo: Ext.getBody(),
        itemId: 'new-return',
        defaults: {
            anchor: '100%'
        },
        height: 500,
        width: 700,
        bodyPadding: 10,
        layout: "vbox",

        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
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
                        maxValue: new Date(),
                        format: 'd / m / Y',
                        name: 'date',
                        anchor: '100% 10%'
                    }
                ]
            },
            {
                xtype: 'component',
                height: 20
            },
            {
                xtype: "container",
                layout: 'hbox',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Phone',
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
            {xtype: "grid",
                width: 680,
                layout: "hbox",
                columns: [
                    {text: '№', dataIndex: 'id', flex: 1 },
                    {text: 'Name', dataIndex: 'name', flex: 3},
                    {text: 'Amount', dataIndex: 'amount', flex: 1},
                    {text: 'Quantity', dataIndex: 'quantity', flex: 1},
                    {text: 'Price', dataIndex: 'price', flex: 2},
                    {text: 'Sum', dataIndex: 'sum', flex: 2}
                ]

            },
            {
                xtype: 'container',
                layout: 'hbox',
                width: 680,
                items:[
                    {
                        xtype: 'numberfield',
                        flex: 1
                    },
                    {
                        xtype: 'textfield',
                        flex: 3
                    },
                    {
                        xtype: 'numberfield',
                        flex: 1,
                        minValue: 0,
                        value: 1
                    },
                    {
                        xtype: 'combobox',
                        flex: 1
                    },
                    {
                        xtype: 'numberfield',
                        editable: true,
                        flex: 2
                    },
                    {
                        xtype: 'numberfield',
                        editable: true,
                        flex: 2
                    }

                ]
            },
            {
                xtype: 'button',
                width: 70,
                height: 30,
                itemId: 'create',
                text: 'Add'
            },

            {
                xtype: 'gridpanel',
                itemId: 'empty-grid',
                store: 'ProjectExtJs5.store.NewReturnStore'
                //renderTo: Ext.getBody(),
//                initComponent: function () {
//                    var me = this;
//                    me.callParent(arguments);
//                }
//                width: 680,
//                height: 300,
//                layout: "hbox",
//                items: [
//                    {
//                        xtype: 'textfield',
//                        flex: 1
//                    },
//                    {
//                        xtype: 'textfield',
//                        flex: 3
//                    },
//                    {
//                        xtype: 'textfield',
//                        flex: 1
//                    },
//                    {
//                        xtype: 'textfield',
//                        flex: 1
//                    },
//                    {
//                        xtype: 'textfield',
//                        flex: 2
//                    },
//                    {
//                        xtype: 'textfield',
//                        flex: 3
//                    }
//                ]
            }
        ]



//        buttons: [{
//            text: 'Reset',
//            handler: function() {
//                this.up('form').getForm().reset();
//            }
//        },
//            {
//                text: 'Submit',
//                formBind: true, //only enabled once the form is valid
//                disabled: true,
//                handler: function() {
//                    var form = this.up('form').getForm();
//                    if (form.isValid()) {
//                        form.submit({
//                            success: function(form, action) {
//                                Ext.Msg.alert('Success', action.result.msg);
//                            },
//                            failure: function(form, action) {
//                                Ext.Msg.alert('Failed', action.result.msg);
//                            }
//                        });
//                    }
//                }
//            }]

    }


);
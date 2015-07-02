/**
 * Created by Myroslava on 12.06.2015.
 */
Ext.define('ProjectExtJs5.view.sale.NewInvoice', {
    extend: 'Ext.form.Panel',
//    require:([
//        'Ext.grid.*',
//        'Ext.container.*'
//    ]),
    xtype: 'new-invoice',
    itemId: 'new-invoice',
    renderTo: Ext.getBody(),
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
                    anchor: '100% 10%'
                }
                ]

        },
        {
            xtype: 'component',
            height: 20
        },
        {
            xtype: 'container',
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
        }
//        {
//            xtype: 'new-grid',
//            height: 300
//        }
        ]
//        Ext.onReady(function (tbar) {
//            // Define our data model
//            Ext.define('Stuff', {
////        extend: 'Ext.data.Model',
//                fields: ['name', 'amount', 'quantity', 'price', 'sum' ]
//            }),
//
//
//            {
//                xtype: 'grid',
//                itemId: 'grid-new',
//                store: store,
//                width: 650,
//                height: 300,
//                columns:
//                    [
//                        {
//                            text: 'Id',
//                            dataIndex: 'id',
//                            hidden: true
//
//                        },
//                        {
//                            text: 'Name',
//                            dataIndex: 'name',
//                            sortable: true,
//                            flex: 3,
//                            editor: {
//                                xtype: 'textfield',
//                                allowBlank: false
//                            }
//                        },
//                        {
//                            text: 'Amount',
//
//                            dataIndex: 'amount',
//                            sortable: true,
//                            flex: 2,
//                            editor: {
//                                xtype: 'combobox',
//                                allowBlank: false
//                            }
//                        },
//                        {
//                            text: 'Quantity',
//                            sortable: true,
//                            dataIndex: 'quantity',
//                            flex: 2,
//                            editor: {
//                                xtype: 'textfield',
//                                allowBlank: false
//                            }
//                        },
//                        {
//                            text: 'Price',
//                            dataIndex: 'price',
//                            sortable: true,
//                            flex: 2,
//                            editor: {
//                                xtype: 'textfield',
//                                allowBlank: false
//                            }
//                        },
//                        {
//                            text: 'Sum',
//                            sortable: true,
//                            dataIndex: 'sum',
//                            flex: 2,
//                            editor: {
//                                xtype: 'textfield',
//                                allowBlank: false
//                            }
//                        }
//                    ]
//            },
//            {
//
//                tbar: [
//                    {
//                        text: 'Add',
//                        handler: function () {
//                            rowEditing.cancelEdit();
//                            var add = Ext.create('Stuff', {
//                                name: 'new',
//                                amount: '1',
//                                quantity: '',
//                                price: '',
//                                sum: ''
//                            });
//                            store.insert(0, add);
//                            rowEditing.startEdit(0, 0);
//                        }
//                    },
//                    {
//                        text: 'Delete',
//                        itemId: 'deleteEl',
//                        handler: function () {
//                            var del = '#grid-new'.getSelectionModel();
//                            rowEditing.cancelEdit();
//                            store.remove(del.getSelection());
//                            if (store.getCount() > 0) {
//                                del.select(0);
//                            }
//                        },
//                        disabled: true
//                    }
//                ],
//                plugins: [rowEditing],
//                listeners: {
//                    'selectionchange': function (view, records) {
//                        '#grid-new'.down('#deleteEl').setDisabled(!records.length);
//                    }
//                }
//            };
//            var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
//                clicksToMoveEditor: 1,
//                autoCancel: false
//            });
//
//
////                plugins: {
////                    ptype: 'rowediting',
//////        clicksToEdit: 1,
////                        clicksToMoveEditor: 1,
////                        autoCancel: false
////                },
//
////            {
////                xtype: 'container',
////                itemId: 'excellent-place'
////            }
////
////        buttons: [{
////            text: 'Reset',
////            handler: function() {
////                this.up('form').getForm().reset();
////            }
////        },
////            {
////                text: 'Submit',
////                formBind: true, //only enabled once the form is valid
////                disabled: true,
////                handler: function() {
////                    var form = this.up('form').getForm();
////                    if (form.isValid()) {
////                        form.submit({
////                            success: function(form, action) {
////                                Ext.Msg.alert('Success', action.result.msg);
////                            },
////                            failure: function(form, action) {
////                                Ext.Msg.alert('Failed', action.result.msg);
////                            }
////                        });
////                    }
////                }
//            //            }]
//
//
//        })
//]
});



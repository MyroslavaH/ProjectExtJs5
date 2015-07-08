///**
//* Created by Myroslava on 02.07.2015.
//// */
//var store = Ext.create('Ext.data.Store', {
//  //  autoDestroy: true,
////    model: 'Stuff',
//    fields: ['name', 'amount', 'quantity', 'price', 'sum' ],
//    data: {
//        'items': [
//            {'name': 'bread', 'amount': '1', 'quantity': 'unit', 'price': '8', 'sum': '8'}
//        ]
//    },
//    proxy: {
//        type: 'ajax',
//        reader: {
//            type: 'json',
//            rootProperty: 'items'
//        }
//    }
//});
//
//Ext.define('ProjectExtJs5.view.sale.Grid', {
//    requires:([
//        'Ext.grid.*',
////        'Ext.data.*',
//        'Ext.util.*',
//        'Ext.state.*',
//        'Ext.form.*',
//        'Ext.ux.CheckColumn'
//    ]),
//    itemId: 'new-grid',
//    xtype: 'new-grid',
//    renderTo: Ext.getBody(),
//    layout: 'hbox',
//    defaults: {
//        anchor: '100%'
//    }
//});
//
//Ext.onReady(function (tbar) {
//    // Define our data model
//    Ext.define('Stuff', {
////        extend: 'Ext.data.Model',
//        fields: ['name', 'amount', 'quantity', 'price', 'sum' ]
//    });
//    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
//        clicksToMoveEditor: 1,
//        autoCancel: false
//    });
//
//    var grid = Ext.create('Ext.grid.Panel', {
//        store: store,
//        width: 650,
//        height: 300,
//        columns: [
//            {
//                text: 'Id',
//                dataIndex: 'id',
//                hidden: true
//
//            },
//            {
//                text: 'Name',
//                dataIndex: 'name',
//                sortable: true,
//                flex: 3,
//                editor: {
//                    xtype: 'textfield',
//                    allowBlank: false
//                }
//            },
//            {
//                text: 'Amount',
//
//                dataIndex: 'amount',
//                sortable: true,
//                flex: 2,
//                editor: {
//                    xtype: 'combobox',
//                    allowBlank: false
//                }
//            },
//            {
//                text: 'Quantity',
//                sortable: true,
//                dataIndex: 'quantity',
//                flex: 2,
//                editor: {
//                    xtype: 'textfield',
//                    allowBlank: false
//                }
//            },
//            {
//                text: 'Price',
//                dataIndex: 'price',
//                sortable: true,
//                flex: 2,
//                editor: {
//                    xtype: 'textfield',
//                    allowBlank: false
//                }
//            },
//            {
//                text: 'Sum',
//                sortable: true,
//                dataIndex: 'sum',
//                flex: 2,
//                editor: {
//                    xtype: 'textfield',
//                    allowBlank: false
//                }
//            }
//        ],
//        renderTo: 'editor-grid',
//        frame: true,
//        tbar: [
//            {
//                text: 'Add',
//                iconCls: 'add',
//                handler: function () {
//                    rowEditing.cancelEdit();
//
//                    // Create a model instance
//                    var r = Ext.create('Stuff', {
//                        name: 'new',
//                        active: true
//                    });
//
//                    store.insert(0, r);
//                    rowEditing.startEdit(0, 0);
//                }
//            },
//            {
//                itemId: 'delete',
//                text: 'Remove',
////                iconCls: 'remove',
//                handler: function () {
//                    var sm = grid.getSelectionModel();
//                    rowEditing.cancelEdit();
//                    store.remove(sm.getSelection());
//                    if (store.getCount() > 0) {
//                        sm.select(0);
//                    }
//                },
//                disabled: true
//            }
//        ],
//        plugins: [rowEditing],
//        listeners: {
//            'selectionchange': function (view, records) {
//                grid.down('#delete').setDisabled(!records.length);
//            }
//        }
//    });
//});
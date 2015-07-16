/**
 * Created by Myroslava on 13.06.2015.
 */

Ext.define('ProjectExtJs5.view.warehouse.NewGoods', {
        extend: 'Ext.form.Panel',

        xtype: 'new-goods',
        renderTo: Ext.getBody(),
        itemid: 'new-goods',
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

        items: [{
            xtype: 'container',
            anchor: '100%',
            layout: 'hbox',
            items:[{
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
                    xtype: 'textfield',
                    fieldLabel: 'Quantity',
                    allowBlank: false,
                    name: 'name',
                    anchor:'95%'
                }]
            },{
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Amount',
//                afterLabelTextTpl: 'required',
                    allowBlank: false,
                    name: 'amount',
                    anchor:'100%'
                },{
                    xtype:'textfield',
                    fieldLabel: 'Id',
//                afterLabelTextTpl: 'required',
                    allowBlank: false,
                    name: 'id',
                    anchor:'100%'
                }]
            }]
//           items: [{
//               region: 'south',
//
//
//            extend: 'Ext.grid.panel',
//            layout: 'hbox',
//            title: 'All Invoices',
//            xtype: 'invoice-grid',
//            itemid: 'invoice-grid',
//            store: Ext.data.StoreManager.lookup('invoiceStore'),
//            columns: [
//                { text: 'Number',  dataIndex: 'number', width: 100},
//                { text: 'Name',  dataIndex: 'name', flex: 1 },
//                { text: 'Sum', dataIndex: 'sum',flex: 1 },
//                { text: 'Currency', dataIndex: 'currency',width: 100 },
//                { text: 'Date', dataIndex: 'date',width: 100 },
//                { text: 'About', dataIndex: 'about',flex: 1}
//            ],
//            height: 450,
//            width: 800,
//            renderTo: Ext.getBody()
//           }
//]


        }],



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
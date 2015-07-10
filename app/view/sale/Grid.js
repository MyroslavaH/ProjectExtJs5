Ext.define('ProjectExtJs5.view.sale.Grid', {
    extend: 'Ext.grid.Panel',
    xtype:"new-grid",
    layout: "vbox",
//    renderTo: Ext.getBody(),
    height: 300,
    width: 700,
    columns: [
        {
            text: 'Id',
            hidden: true,
            dataIndex: 'id'
        },
        {
            text: 'Name',
            sortable: true,
            dataIndex: 'name',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Amount',
            sortable: true,
            dataIndex: 'vendorName',
            flex: 1,
            editor: {
                xtype: 'combobox',
                displayField: 'name',
                valueField: 'name',
                editable: false,
                queryMode: 'local',
                forceSelection: true,
                triggerAction: 'all',
                allowBlank: false
            }
        },
        {
            text: 'Quantity',
            sortable: true,
            dataIndex: 'category',
            flex: 2,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Price',
            sortable: true,
            dataIndex: 'category',
            flex: 2,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Sum',
            sortable: true,
            dataIndex: 'category',
            flex: 2,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }

        }


    ]




});
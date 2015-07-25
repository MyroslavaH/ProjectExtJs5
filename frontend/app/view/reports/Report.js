/**
 * Created by Myroslava on 17.07.2015.
 */

Ext.define('ProjectExtJs5.view.reports.Report', {
    extend: 'Ext.panel.Panel',
    xtype: 'report-container',
    itemId: 'report-container',
    layout: 'border',
    height: 500,
    width: 800,
    items:[
        {
            xtype: 'textfield',
            width:  300
        },
        {
            xtype: 'button',
            width: 50,
            text: 'Choose'

        },
        {
            xtype: 'report-grid'
        }
    ],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});

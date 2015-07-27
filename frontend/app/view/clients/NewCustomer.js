/**
 * Created by Myroslava on 05.06.2015.
 */

Ext.define('ProjectExtJs5.view.clients.NewCustomer', {
    extend: 'Ext.form.Panel',
    xtype: 'new-customer',
    renderTo: Ext.getBody(),
    itemId: 'new-customer',
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    height: 500,
    width: 700,
    bodyPadding: 10,
    reference: 'new-customer',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            name: 'firstName',
            itemId: 'firstName'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            name: 'lastName',
            itemId: 'lastName'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Phone Number',
            name: 'phone',
            itemId: 'phone'
        },
        {
            xtype: 'button',
            text:'Add new client',
            itemId: 'newCustomer-btn',
            handler: 'addNewClient'
        }
    ],
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
    }
});
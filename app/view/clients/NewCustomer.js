/**
 * Created by Myroslava on 05.06.2015.
 */

Ext.define('ProjectExtJs5.view.clients.NewCustomer', {
    extend: 'Ext.form.Panel',

        xtype: 'new-customer',
        renderTo: Ext.getBody(),
        itemid: 'new-customer',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },

//        title: 'Create new customer',
        height: 300,
        width: 700,
        bodyPadding: 10,

        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'First Name',
                name: 'first'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Last Name',
                name: 'last'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Description',
                name: 'description'
            },
            {
                xtype: 'numberfield',
                value: 0,
                minValue: 0,
                maxValue: 5,
                anchor: '100%',
                fieldLabel: 'Kind of discont',
                name: 'discond'




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
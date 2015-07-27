/**
 * Created by Myroslava on 17.07.2015.
 */
Ext.define('ProjectExtJs5.model.CustomerModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int'},
        { name: 'firstName', type: 'string'},
        { name: 'lastName', type: 'string'},
        { name: 'phone', type: 'string'}
    ]
});
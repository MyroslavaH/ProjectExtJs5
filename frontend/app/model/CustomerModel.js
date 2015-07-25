/**
 * Created by Myroslava on 17.07.2015.
 */
Ext.define('ProjectExtJs5.model.CustomerModel', {
    extend: 'Ext.data.Model',
    identifier: {
        type: 'sequential',
        seed: 1000,
        increment: 1
    },
    fields: [
        { name: 'id', type: 'int'},
        { name: 'firstName', type: 'string'},
        { name: 'lastName', type: 'string'},
        { name: 'phone', type: 'int'}
    ]
});
/**
 * Created by Myroslava on 17.07.2015.
 */

Ext.define('ProjectExtJs5.model.ReportModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'num-invoice', type: 'int'},
        { name: 'name', type: 'string'},
        { name: 'sum', type: 'int'}
    ]
});
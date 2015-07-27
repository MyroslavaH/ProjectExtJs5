/**
 * Created by Myroslava on 17.07.2015.
 */
Ext.define('ProjectExtJs5.model.GoodsModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int'},
        { name: 'good', type: 'string'},
        { name: 'amount', type: 'int'}
    ]
});
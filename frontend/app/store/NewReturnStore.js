///**
// * Created by Myroslava on 19.06.2015.
// */
Ext.define('ProjectExtJs5.store.NewReturnStore', {
    extend: 'Ext.data.Store',
    model: 'ProjectExtJs5.model.NewReturnModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '../NewReturnGrid.json',
        reader: {
            type: 'json',
            rootProperty: 'return-new'
        }
    }
});
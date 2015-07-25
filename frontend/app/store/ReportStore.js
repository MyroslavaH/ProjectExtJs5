/**
 * Created by Myroslava on 17.07.2015.
 */

Ext.define('ProjectExtJs5.store.ReportStore', {
    extend: 'Ext.data.Store',
    model: 'ProjectExtJs5.model.ReportModel',
    autoLoad: true,
    storeId:'reportStore'
});
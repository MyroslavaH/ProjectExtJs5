/**
 * Created by Myroslava on 07.06.2015.
 */

Ext.define('ProjectExtJs5.store.InvoiceGrid', {
    extend: 'Ext.data.Store',
    model: 'ProjectExtJs5.model.InvoiceGridModel',
    storeId: 'invoice-grid-store',
//    sorters: [{
//        property: 'numberOfInvoice',
//        direction: 'ASC'
//    }]

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '../InvoiceGrid.json',
        reader: {
            type: 'json',
            rootProperty: 'invoice-gr'
        }
    }

});
Ext.define('TopTag.store.Tags', {

    extend: 'Ext.data.Store',

    require: ['Ext.data.proxy.LocalStorage'],

    config: {
        storeId: 'tagStore',
        model: 'TopTag.model.Tag',
        proxy: {
            type: 'localstorage'
        },
        autoLoad: true
    }
});
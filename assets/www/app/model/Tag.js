Ext.define('TopTag.model.Tag', {

    extend: 'Ext.data.Model',

    statics: {
        loadTag: function (tag, cb) {
            this.load(tag, {
                failure: function (record, operation) {
                    if (cb && typeof cb === 'function') {
                        cb('Failed to create the record for tag ' + tag);
                    }
                },
                success: function (record, operation) {
                    var tagStore = Ext.getStore('tagStore');
                    tagStore.add(record);
                    if (cb && typeof cb === 'function') {
                        cb(null, record);
                    }
                }
            });
        }
    },

    config: {
        fields: [
            {name: 'tagid', type: 'string', mapping: 'basic[0].Q'},
            {name: 'hashtag', type: 'string', mapping: 'basic[0].H'},
            {name: 'title', type: 'string', mapping: 'basic[0].N'},
            {name: 'subtitle', type: 'string', mapping: 'basic[0].K'},
            {name: 'socialmessage', type: 'string', mapping: 'basic[0].TM'},
            {name: 'channels', type: 'auto', mapping: 'social'}/**,
            {name: 'created', type: 'date', default: new Date()}*/
        ],

        proxy: {
            type: 'rest',
            url: 'http://uk.toptag.com/EN/',
            format: 'json',
            reader: 'json'//Ext.create('TopTag.data.reader.TopTagReader')
        }
    }
});
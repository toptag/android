Ext.define('TopTag.view.ChannelList', {
    extend: 'Ext.List',
    xtype: 'channellist',
    config: {
        itemTpl: '{title}',
        data: [
            { title: 'Item 1' },
            { title: 'Item 2' },
            { title: 'Item 3' },
            { title: 'Item 4' }
        ]
    },

    initialize: function () {
        this.callParent(arguments);
        console.log('in initialize channel list');
    }
});
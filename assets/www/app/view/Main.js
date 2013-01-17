Ext.define('TopTag.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
        'Ext.NavigationView'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Tag List',
                xtype: 'taglist'
            }
        ]
    },
    initialize: function () {
        var Tag = TopTag.model.Tag;
        [123456789, 117293994, 118104661, 169128277].forEach(function (tag) {
            Tag.loadTag(tag, function (err, record) {
                if (err) {
                    console.warn(err);
                } else {
                    console.log('loaded tag %s', record.get('tagid'));
                }
            });
        });

        this.callParent(arguments);
    }
});

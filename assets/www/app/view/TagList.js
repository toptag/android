Ext.define('TopTag.view.TagList', {

    extend: 'Ext.List',

    xtype: 'taglist',

    config: {
        cls: 'tag-list',
        store: 'tagStore',
        itemTpl: [
            '<img class="list-image" src="http://images.toptag.com/tags/{tagid}A2.jpg">',
            '<div class="list-title">{title}</div>',
            '<div class="list-subtitle">{subtitle}</div>',
            '<div class="list-created">{created}</div>']
    }
});
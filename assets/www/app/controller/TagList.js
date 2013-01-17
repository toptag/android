Ext.define('TopTag.controller.TagList', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            taglist: 'taglist',
            main: 'main'
        },
        control: {
            taglist: {
                itemtap: 'taglistItemTapped'
            }
        }
    },
    
    taglistItemTapped: function (list, index, target, record, e, eOpts) {
        console.log(record);
        this.getMain().push(Ext.merge({
            xtype: 'tagdetail'
        }, record.data, {
            titleBar: {
                items: [{
                    xtype: 'button',
                    text: 'delete'
                }]
            }
        }));
    }
});
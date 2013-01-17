Ext.define('TopTag.controller.TagDetail', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            tagDetail: 'tagdetail'
        },
        control: {
            tagDetail: {
                itemtap: 'channelTapped'
            }
        }
    },

    channelTapped: function (list, index, target, record, e, eOpts) {
        console.log('You tapped a channel %d', index);
        var channel = list.getChannels()[index];
        console.log(channel);
        var url = 'http://uk.toptag.com/EN/' + list.getTagid() + '/' + channel.N + '.json';
        console.log('url: %s', url);
        Ext.Ajax.request({
            url: url,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                var link = data.W;
                window.open(link, '_blank', 'location=yes');
            },
            failure: function () {
                console.log('Nope that didnt work');
            }

        });
    }
});
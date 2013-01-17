Ext.define('TopTag.controller.Share', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            shareButton: 'tagdetail button'
        },
        control: {
            shareButton: {
                tap: 'shareTag'
            }
        }
    },

    shareTag: function (shareButton, e, eOpts) {
        var tagDetail = shareButton.up('tagdetail');
        var tagId = tagDetail.getTagid();
        var socialmessage = tagDetail.getSocialmessage();
        var title = tagDetail.getTitle();
        var shareMethod = shareButton.getId();
        if (this[shareMethod]) {
            this[shareMethod](tagId, title, socialmessage);
        }
    },

    facebook: function (tagId, title, socialmessage){
        console.log('share tag: %s via: facebook', tagId);
    },
    twitter: function (tagId, title, socialmessage){
        console.log('share tag: %s via: twitter', tagId);
    },
    sms: function (tagId, title, socialmessage){
        console.log('share tag: %s via: sms', tagId);
        window.plugins.emailComposer.sendSms(socialmessage);
    },
    email: function (tagId, title, socialmessage){
        console.log('share tag: %s via: email', tagId);
        window.plugins.emailComposer.showEmailComposer(title, socialmessage, [], [], [], true, []);
    }
});
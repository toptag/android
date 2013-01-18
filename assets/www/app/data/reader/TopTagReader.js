Ext.define('TopTag.data.reader.TopTagReader', {

    extend: 'Ext.data.reader.Json',

    require: ['Ext.data.reader.Json'],

    config: {

    },

    getData: function(data) {
        if (data.social && data.basic && data.basic.length) {
            var normalised = this.mapBasic(data.basic[0]);
            normalised.channels = this.mapSocial(data.social);
            data = normalised;
        }
        return data;
    },

    /**
     * take the basic object and map it to more intuitive names.
     * @param data original basic object.
     * @return {Object} mapped object.
     */
    mapBasic: function (basic) {
        return {
            tagid: basic.Q,
            hashtag: basic.H,
            title: basic.N,
            subtitle: basic.K,
            socialmessage: basic.TM,
            created: new Date()
        };
    },

    /**
     * maps the array of social channels to a more user/ developer friendly array.
     * simply for convenience and better maintenance.
     * @param social
     * @return {*}
     */
    mapSocial: function (social) {
        return Ext.Array.map(social, function (item) {
            return {
                description: item.D,
                channel: item.U,
                identifier: item.N
            }
        });
    }

});
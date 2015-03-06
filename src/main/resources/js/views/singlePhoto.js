define([
    'jquery',
    'underscore',
    'backbone',
    'libs/text!templates/singlePhoto.txt'
], function($, _, Backbone, singlePhotoTemplate) {
    var SinglePhotoView = Backbone.View.extend({
        el : "div#photoOverlay",
        
        render : function(photoCode) {
            var singlePhotoHtml = _.template(singlePhotoTemplate, { code : photoCode });
            this.$el.html(singlePhotoHtml);
        },
        clear : function() {
            this.$el.html('');
        }
    });

    return SinglePhotoView;
});
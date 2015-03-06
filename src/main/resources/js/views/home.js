define([
    'jquery',
    'underscore',
    'backbone',
    'libs/text!templates/home.txt'
], function($, _, Backbone, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el : "#content",
        render : function() {
            var homeHtml = _.template(homeTemplate, {});
            this.$el.html(homeHtml);
        }
    });
    return HomeView;
});
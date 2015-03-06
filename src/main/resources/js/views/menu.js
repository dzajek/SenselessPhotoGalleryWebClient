define([
    'jquery',
    'underscore',
    'backbone',
    'libs/text!templates/menu.txt'
], function($, _, Backbone, menuTemplate) {
    var MenuView = Backbone.View.extend({
        el : $("#navigation"),
        render : function() {
            var menuData = {
                items : [
                    {
                        label : "Home",
                        action: ""
                    },
                    {
                        label: "Photos",
                        action: "#photos"
                    },
                    {
                        label: "Movies",
                        action: "#movies"
                    }
                ]
            };
            var menuHtml = _.template(menuTemplate, menuData);
            this.$el.html(menuHtml);
            $("#menu").menu();
        }
    });

    return MenuView;
});
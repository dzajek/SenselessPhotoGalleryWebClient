define([
    'jquery',
    'underscore',
    'backbone',
    'libs/text!templates/footer.txt'
], function($, _, Backbone, footerTemplate) {
    var FooterView = Backbone.View.extend({
        el : "footer#footer",
        
        render : function() {
            var footerHtml = _.template(footerTemplate, { year : new Date().getFullYear() });
            this.$el.html(footerHtml);
        }
    });

    return FooterView;
});
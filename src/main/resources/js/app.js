define([
    "jquery-ui", 
    "underscore", 
    "backbone", 
    "router", 
    "views/menu",
    "views/footer"
], function ($, _, Backbone, Router, MenuView, FooterView) {
    var initialize = function() {
        
        $('#actualPhoto').click(function() {
            $('figure#photoContainer').hide();
            $('figcaption#photoCaption').html('').hide();
            $('div#photoOverlay').hide();
        });
        
        var menu = new MenuView();
        menu.render();
        
        var footer = new FooterView();
        footer.render();

        Router.initialize();
    };

    return {
        initialize : initialize
    };
});
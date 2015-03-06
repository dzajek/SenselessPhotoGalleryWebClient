define([
    'jquery',
    'underscore',
    'backbone',
    'collections/photoCollection',
    'libs/text!templates/photos.txt',
    "views/dialog/error"
], function($, _, Backbone, PhotoCollection, photosTemplate, ErrorDialog) {
    var PhotosView = Backbone.View.extend({
        el : "article#content",
        initialize : function() {
            this.collection = new PhotoCollection();
            this.collection.bind("reset", this.render, this);
            this.collection.bind("change", this.render, this);
            this.collection.fetch({
                error : function(collection, xhr, options) {
            		var errorMessage =  "Could not initialize PhotoCollection (src: '" 
            		    + PhotoCollection.url 
            		    + "'). Reason: '" 
            		    + xhr.status + " - " 
            		    + xhr.statusText
            		    + "'";
        		    
        		    var errorDialog = new ErrorDialog({
        		        title : "Error",
        		        message : "Unexpected error while loading Photo Collection",
        		        details : errorMessage
        		    });
        		    errorDialog.render();
        		      
                }
            });
        },
    
        render : function() {
            var photosHtml = _.template(photosTemplate, { photos : this.collection.models });
            this.$el.html(photosHtml);
            var photoLinks = $("a[rel='photoLink']");
            
            var thumbnailClicked = function(e) {
                $('div#photoOverlay').show();
                
                $('img#actualPhoto').attr("src", "gallery/photo/" + e.data.code).load(function() {
                    console.log("loaded image: " + e.data.code);
                    $('figure#photoContainer').show();
                    $('figcaption#photoCaption').html(e.data.caption).show();
                });
            };
            
            _.each(photoLinks, function(element) {
                var elem = $(element);
                
                elem.css("cursor", "pointer");
                var options = {
                        code : elem.attr('data-code'),
                        caption: elem.attr('data-caption')
                };
                elem.bind('click', options, thumbnailClicked);
            });
                    
        }
    });


    return PhotosView;
});
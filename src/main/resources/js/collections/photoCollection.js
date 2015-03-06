define([
    'jquery',
    'underscore',
    'backbone',
    'models/photo'
], function($, _, Backbone, Photo) {
    var collectionURL = "gallery"; 
    var PhotoCollection = Backbone.Collection.extend({
        url   : collectionURL,
        model : Photo
    }, {
        url : collectionURL
    });
    return PhotoCollection;
});
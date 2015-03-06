define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var Photo = Backbone.Model.extend({
        defaults : {
            title  : "untitled",
            srcUrl : "fakeUrl"
        }
    });
    return Photo;
});
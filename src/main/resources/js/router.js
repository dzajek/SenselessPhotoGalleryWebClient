define([
  'jquery',
  'underscore',
  'backbone',
  "views/home",
  "views/photos"
], function($, _, Backbone, HomeView, PhotosView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'photos': 'showPhotos',
            'movies': 'showMovies',
            'photo/:code' : 'showPhoto',
    
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var appRouter = new AppRouter;
        
        appRouter.on('route:showPhotos', function() {
            console.log("Render view: Photos");
            var photosView = new PhotosView();
            photosView.render();
        });
        
        appRouter.on('route:showMovies', function() {
            console.log("Render view: Movies");
        });
        
        appRouter.on('route:defaultAction', function(actions) {
            console.log('No route for action: \'', actions, '\'. Going home');
            var homeView = new HomeView();
            homeView.render();
        });
        
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
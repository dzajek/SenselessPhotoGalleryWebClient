requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),  //Remove for prod
    //baseUrl : "js",
    enforceDefine : true,
    paths: {
        "jquery"     : "libs/jquery/jquery",
        "underscore" : "libs/underscore/underscore",
        "backbone"   : "libs/backbone/backbone",
        "jquery-ui"  : "libs/jquery/jquery-ui-1.10.0.custom",
        "templates"  : 'templates'
    },
    shim: {
        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        }
    } 
});

define([
    // Load our app module and pass it to our definition function
    'app'

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
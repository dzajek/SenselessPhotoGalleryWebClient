define([
    'jquery',
    'underscore',
    'backbone',
    'libs/text!templates/dialog/error.txt'
], function($, _, Backbone, errorDialogTemplate) {
    var ErrorDialog = Backbone.View.extend({
        el : "div#errorDialog",
        
        render : function() {
            var dialogHtml = _.template(errorDialogTemplate, this.options);
        
            this.$el.html(dialogHtml);
            $("div#dialog-message").dialog({
                modal: true,
                draggable: false,
                resizable: false,
                dialogClass: "ui-dialog-error",
                width: "75%",
                buttons: {
                    Ok: function() {
                        $(this).dialog("close");
                    }
                },
                close : function() {
                    $(this).dialog("destroy");
                    $("div#errorDialog").html("");
                }
            });
        }
    });
    return ErrorDialog;
});
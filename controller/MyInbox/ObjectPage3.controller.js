sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage3", {
        onPressExecute: function() {
            sap.m.MessageToast.show("Item has been executed.");
            this.getView().byId("actExecute3").setVisible(false);
        },

        onPressComplete: function() {
            sap.m.MessageToast.show("Item has been set as complete.");
            sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage4');
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem3').setVisible(false).setSelected(false);
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem4').setVisible(true).setSelected(true);
        }
    });

    return Controller;
});
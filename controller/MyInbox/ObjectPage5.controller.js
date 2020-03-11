sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage5", {
        onPressExecute: function() {
            sap.m.MessageToast.show("Item has been executed.");
            this.getView().byId("actExecute5").setVisible(false);
        },

        onPressComplete: function() {
            sap.m.MessageToast.show("Item has been set as complete.");
            sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage6');
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem5').setVisible(false).setSelected(false);
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem6').setVisible(true).setSelected(true);
            sap.ui.getCore().byId('__component0---app--username').setText('Hi, Sabine!');
        }
    });

    return Controller;
});
sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage6", {
        onPressExecute: function() {
            sap.m.MessageToast.show("Item has been executed.");
            this.getView().byId("actExecute6").setVisible(false);
        },

        onPressComplete: function() {
            sap.m.MessageToast.show("Item has been set as complete.");
            sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage7');
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem6').setVisible(false).setSelected(false);
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem7').setVisible(true).setSelected(true);
            sap.ui.getCore().byId('__component0---app--username').setText('Hi, Francisco!');
        }
    });

    return Controller;
});
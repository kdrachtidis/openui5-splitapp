sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage7", {
        onPressComplete: function() {
            sap.m.MessageToast.show("Item has been set as complete.");
            sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage8');
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem7').setVisible(false).setSelected(false);
            sap.ui.getCore().byId('__xmlview0--MyInboxOpenItems').setTitle('All Items (0)');
        }
    });

    return Controller;
});
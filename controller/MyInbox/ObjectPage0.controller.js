sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageBox',
    'sap/ui/core/mvc/Controller'
], function(jQuery, MessageBox, Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage0", {

        onInit: function() {
            var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
            MessageBox.information(
                "The Workflow has been invoked in your MyInbox application.", {
                    actions: [sap.m.MessageBox.Action.OK],
                    styleClass: bCompact ? "sapUiSizeCompact" : "",
                    onClose: function(sAction) {
                        sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage1');
                        sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem1').setVisible(true).setSelected(true);
                        sap.ui.getCore().byId('__xmlview0--MyInboxOpenItems').setTitle('All Items (1)');
                    }
                }
            )
        }
    });

    return Controller;
});
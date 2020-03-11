sap.ui.define([
    'jquery.sap.global',
    'sap/m/MessageBox',
    'sap/ui/core/mvc/Controller'
], function(jQuery, MessageBox, Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.MyInbox", {
        onListItemPress: function(oEvent) {
            var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
            console.log(sToPageId);
            this.getSplitAppObj().toDetail(this.createId(sToPageId));
        },

        getSplitAppObj: function() {
            var result = this.byId("MyInboxSplitApp");
            if (!result) {
                jQuery.sap.log.info("SplitApp object can't be found");
            }
            return result;
        }
    });

    return Controller;
});
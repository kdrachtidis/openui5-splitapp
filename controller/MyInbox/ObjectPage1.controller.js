sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessagePopover',
    'sap/m/MessagePopoverItem'
], function(jQuery, Controller, JSONModel, MessagePopover, MessagePopoverItem) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage1", {

        onInit: function() {
            var oModel = new JSONModel(jQuery.sap.getModulePath("UI5FioriForTools.content", "/users.json"));
            this.getView().setModel(oModel);
        },

        onPressComplete: function() {
            sap.m.MessageToast.show("Item has been set as complete.");
            sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage2');
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem1').setVisible(false).setSelected(false);
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem2').setVisible(true).setSelected(true);
        }
    });

    return Controller;
});
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessagePopover',
    'sap/m/MessagePopoverItem'
], function(jQuery, Controller, JSONModel, MessagePopover, MessagePopoverItem) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MyInbox.ObjectPage2", {

        onInit: function() {
            var oModel1 = new JSONModel(jQuery.sap.getModulePath("UI5FioriForTools.content", "/users.json"));
            var oModel2 = new JSONModel(jQuery.sap.getModulePath("UI5FioriForTools.content", "/languages.json"));
            this.getView().setModel(oModel1, "users");
            this.getView().setModel(oModel2, "languages");
        },

        onPressComplete: function() {
            sap.m.MessageToast.show("Item has been set as complete.");
            sap.ui.getCore().byId('__xmlview0--MyInboxSplitApp').toDetail('__xmlview0--MyInboxDetailPage3');
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem2').setVisible(false).setSelected(false);
            sap.ui.getCore().byId('__xmlview0--MyInboxObjectListItem3').setVisible(true).setSelected(true);
            sap.ui.getCore().byId('__component0---app--username').setText('Hi, Donna!');
        }
    });

    return Controller;
});
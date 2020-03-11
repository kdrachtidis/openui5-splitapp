sap.ui.define([
  'jquery.sap.global',
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  'sap/m/Popover',
  'sap/m/Button'
], function(jQuery, Controller, JSONModel, ResponsivePopover, Button ) {
  "use strict";

  var Controller = Controller.extend("UI5FioriForTools.controller.init", {
    model: new sap.ui.model.json.JSONModel(),
    data: {
      navigation: [{
        title: 'Dashboard',
        icon: 'sap-icon://home',
        key: 'page1'
      }, {
        title: 'My Inbox',
        icon: 'sap-icon://education',
        expanded: false,
        key: 'MyInbox'
      }, {
        title: 'Scenario Monitoring',
        icon: 'sap-icon://repost',
        expanded: false,
        key: 'Scenario'
      }],
      fixedNavigation: [{
        title: 'Important Links',
        icon: 'sap-icon://chain-link',
        key: 'importantlinks'
      }, {
        title: 'Legal',
        icon: 'sap-icon://compare',
        key: 'legal'
      }]
    },
    
    onInit: function() {
      this.model.setData(this.data);
      this.getView().setModel(this.model);
      this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
    },

    /**
     * Convenience method for accessing the router.
     * @public
     * @returns {sap.ui.core.routing.Router} the router for this component
     */
    getRouter: function() {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    onItemSelect: function(oEvent) {
      var oItem = oEvent.getParameter('item');
      // console.log(oItem);
      var sKey = oItem.getKey();
      // console.log(sKey);
      this.getRouter().navTo(sKey);
      if(sKey == "Scenario"){
        sap.ui.getCore().byId('__component0---app--username').setText('Hi, Francisco!');
      } else if(sKey == "MyInbox"){
        sap.ui.getCore().byId('__component0---app--username').setText('Hi, Sabine!');
      };
    },

    // EXPERIMENT
    onPress: function(oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Root1");
      console.log(this);
    },

    // USERNAME
    handleUserNamePress: function(event) {
      var popover = new ResponsivePopover({
        showHeader: false,
        placement: sap.m.PlacementType.Bottom,
        content: [
          new Button({
            text: 'User Settings',
            type: sap.m.ButtonType.Transparent
          }),
          new Button({
            text: 'Help',
            type: sap.m.ButtonType.Transparent
          }),
          new Button({
            text: 'Online Guide',
            type: sap.m.ButtonType.Transparent
          }),
          new Button({
            text: 'Logout',
            type: sap.m.ButtonType.Transparent
          })
        ]
      }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

      popover.openBy(event.getSource());
    },

    onSideNavButtonPress: function() {
      var sViewId = this.getView().getId();
      var oToolPage = sap.ui.getCore().byId(sViewId + "--rootApp");
      var bSideExpanded = oToolPage.getSideExpanded();
      this._setToggleButtonTooltip(bSideExpanded);
      oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
    },

    _setToggleButtonTooltip: function(bLarge) {
      var oToggleButton = this.getView().byId('sideNavigationToggleButton');
      if (bLarge) {
        oToggleButton.setTooltip('Large Size Navigation');
      } else {
        oToggleButton.setTooltip('Small Size Navigation');
      }
    }
  });
  return Controller;
});

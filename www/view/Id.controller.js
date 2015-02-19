sap.ui.controller("view.Id", {

app: null,
view: null,
uuid: null,

	onInit: function() {
	    this.app = sap.ui.getCore().byId("idMyApp");
	    
	    //this.uuid = device.uuid;
	    
	    this.uuid = "764869";
        
        var oModel = new sap.ui.model.json.JSONModel();
        
        oModel.setData({
            idAppId: device.uuid
        });
        
        this.view = this.getView();
        
        this.view.setModel(oModel);
    
	},

onNavBack: function() {
    this.app.back();
}

});
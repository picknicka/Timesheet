sap.ui.controller("view.Explore", {

app: null,

    onInit: function() {
	    // Set app
        this.app = sap.ui.getCore().byId("idMyApp");
    },
    
    //Navigate back
	onNavBack: function() {
        this.app.back();
    }

});
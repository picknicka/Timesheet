sap.ui.controller("view.Camera", {

app: null,
view: null,
src: null,
text: null,

	onInit: function() { 
		//to register for beforeShow event 
		this.getView().addEventDelegate({
			// not added the controller as delegate to avoid controller functions with similar names as the events 
			onBeforeShow : jQuery.proxy(function(evt) { this.onBeforeShow(evt); }, this) 
		}); 
	
	    // Set app
        this.app = sap.ui.getCore().byId("idMyApp");
	},

	onBeforeShow: function() {
        //take a Photo with the camera
        this.takePhoto();
	},
	
	//take a photo
	takePhoto: function() {
	    navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50,
			destinationType : Camera.DestinationType.DATA_URL
		});
		
		function onSuccess(imageData) {
			var oModel = sap.ui.getCore().getModel();
			oModel.setData({
				idImageSrc: "data:image/jpeg;base64," + imageData,
				idText: null
			});
		}
		
		function onFail(message) {			
			var oModel = sap.ui.getCore().getModel();
			oModel.setData({
				idImageSrc: null,
				idText: message
			});
		}
	},
	
	//Navigate back
	onNavBack: function() {
        this.app.back();
    }

});
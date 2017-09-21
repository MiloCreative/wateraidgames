function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;

	var parent = dom.parentNode;

	
	this.SetProgress = function (progress) { 
		if (this.progress < progress)
			this.progress = progress; 
		if (progress >= 1) {
			this.message = "Preparing...";
			document.getElementById("loadingTxt").innerHTML = this.message;
		} 
		this.Update();
	}

	this.SetMessage = function (message) { 
		//this.message = message; 
		this.Update();
	}

	this.Clear = function() {
		document.getElementById("loadingBox").style.display = "none";
		document.getElementById("loadingTxt").style.display = "none";
	}

	this.Update = function() {
		var height = this.progress * 65;
		document.getElementById("water").style.height = height+"px";
	}

	this.Update ();
}
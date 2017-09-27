function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;

	var parent = dom.parentNode;

	this.SetProgress = function (progress) { 
		console.log(progress);
		if (this.progress < progress)
			this.progress = progress;
			console.log(this.progress);
			
		if (progress >= 1) {
			this.message = "Preparing...";
			document.getElementById("ProgressBar").style.width = "100%";
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
			if (this.progress < 1) {
			var length = 500 * this.progress;
                bar = document.getElementById("ProgressBar");
                bar.style.width = length + "px";
			}
	}

	this.Update ();
}
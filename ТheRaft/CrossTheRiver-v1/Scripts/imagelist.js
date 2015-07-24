var ImageList = (function() {
	'use strict';
	
	function Loader() {
		//this.imageList = null;
	}
	Loader.prototype.enlist = function(l) {
		this.imageList = l;
		this.count = l.length;
		this.loaded = 0;
	};
	Loader.prototype.onProgress = function(c) {
		// if (typeof c !== 'function') {
		// 	throw 'Callback must be a function!';
		// }
		this.progress = c;
	};
	Loader.prototype.onLoad = function(c) {
		this.load = c;
	};
	Loader.prototype.addImage = function() {
		this.loaded++;
		if (this.loaded === this.count) {
			this.load();
			return;
		}
		//For testing:
		for (var j = 0; j < 100000000; j++) {
			
		}
		//End testing.
		this.progress(Math.round((this.loaded * 100) / this.count));
	}
	Loader.prototype.getImage = function(s) {
		for (var i = 0, len = this.imageList.length; i < len; i++) {
			if (this.imageList[i].name === s) {
				return this.imageList[i].data;
			}
		}
		return null;
	}
	Loader.prototype.preload = function() {
		if (typeof this.imageList === 'undefined') {
			throw 'You haven\'t specified an image list to load!';
		}
		if (this.imageList.length === 0) {
			throw 'Empty or invalid image list!';
		}
		for (var i = 0; i < this.count; i++) {
			this.imageList[i].data = new Image();
			this.imageList[i].data.src = this.imageList[i].src;
			this.imageList[i].data.onload = this.addImage()
		}
	};
	
	return Loader;
})(); 
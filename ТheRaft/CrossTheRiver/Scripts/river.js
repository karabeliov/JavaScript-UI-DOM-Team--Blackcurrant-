var river = (function (parent) {
	river = Object.create(parent);
	Object.defineProperty(river, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return river;
} (gameObject));	
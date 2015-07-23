var cop = (function (parent) {
	cop = Object.create(parent);
	Object.defineProperty(cop, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return cop;
} (person));	
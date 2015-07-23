var prisoner = (function (parent) {
	prisoner = Object.create(parent);
	Object.defineProperty(prisoner, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return prisoner;
} (person));	
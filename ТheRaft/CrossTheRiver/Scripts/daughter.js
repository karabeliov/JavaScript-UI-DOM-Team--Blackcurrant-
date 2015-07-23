var daughter = (function (parent) {
	daughter = Object.create(parent);
	Object.defineProperty(daughter, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return daughter;
} (person));	
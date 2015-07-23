var mother = (function (parent) {
	mother = Object.create(parent);
	Object.defineProperty(mother, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	});
	return mother;
} (person));
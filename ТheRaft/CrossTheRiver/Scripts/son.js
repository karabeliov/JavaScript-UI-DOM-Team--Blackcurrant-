var son = (function (parent) {
	son = Object.create(parent);
	Object.defineProperty(son, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return son;
} (person));	
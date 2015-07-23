
var father = (function (parent) {
	father = Object.create(parent);
	Object.defineProperty(father, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return father;
} (person));	
var tree = (function (parent) {
	tree = Object.create(parent);
	Object.defineProperty(tree, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return tree;
} (gameObject));	
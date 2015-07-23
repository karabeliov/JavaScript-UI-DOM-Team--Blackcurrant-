var raft = (function (parent) {
	raft = Object.create(parent);
	Object.defineProperty(raft, 'init', {
		value: function (x, y, size) {
			parent.init.call(this, x, y, size);
			return this;
		}
	})
	return raft;
} (gameObject));	
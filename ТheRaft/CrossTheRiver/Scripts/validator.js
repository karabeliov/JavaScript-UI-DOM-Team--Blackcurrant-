var validator = {
	isNumber: function (value, name) {
		if (typeof value !== 'number') {
			throw new Error(name + ' must be a number');
		}
	},
	isPositiveNumber: function (value, name) {
		if (value < 0) {
			throw new Error(name + ' must be a positive number');
		}
	}
}
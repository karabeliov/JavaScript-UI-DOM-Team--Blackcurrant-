var Validator = (function(){
	'use strict';
	
	function That (c) {
		if(!Array.isArray(c)) {
			c = c.seated;
		};
		return {
			has: function() {
				var args = [].slice.call(arguments);
				var len = args.length, contained = 0;
				if (len === 0) {
					return false;
				}
				for (var i = 0; i < len; i++) {
					if (c.some(function(el){
						return (el.role === args[i]);
					})) {
						contained++;
					}
				}
				if (contained === len) {
					return true;
				}
				return false;
			},
			hasNo: function() {
				var args = [].slice.call(arguments);
				var len = args.length, contained = 0;
				if (len === 0) {
					return false;
				}
				for (var i = 0; i < len; i++) {
					if (c.some(function(el){
						return (el.role === args[i]);
					})) {
						contained++;
					}
				}
				if (contained < len) {
					return true;
				}
				return false;
			}
		};
	}
	
	function Validator(c, r, a) {
		this.characters = c;
		this.raft = r;
		this.arrow = a;
	}
	Validator.prototype.validateMove = function () {
		//Check if the raft can travel
		if (this.raft.seated.length === 0) {
			return false;
		}
		if (this.raft.seated.length === 1 && That(this.raft).has('criminal')) {
			return false;
		}
		
		//Check is the side the raft is on is valid
		var side = this.raft.side;
		var chars = [];
		for (var i = 0, len = this.characters.length; i < len; i++) {
			if (this.characters[i].side === side) {
				chars.push(this.characters[i]);
			}
		};
		// That(chars).has('mother') checks if the characters on the current side on the beach have a mother among them
		// That(this.raft).hasNo('policeman') tells if there is no policeman on the raft
		// .has and .hasNo arguments are conjunctive, function will check if all are or aren't in the group
		console.log(That(this.raft).hasNo('mother', 'father'));
	};
	
	Validator.prototype.travel = function() {
		//This will animate:
		// 1 -> Raft
		
		// 2 -> Characters on the raft
		
		// 3 -> Arrow button
		
	};
	
	return Validator;
})();
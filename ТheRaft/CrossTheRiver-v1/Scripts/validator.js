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
				if (contained = len) {
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
		var side, chars;
		
		var boy = false, girl = false, father = false, mother = false, policeman = false, criminal = false;
		//Check if the raft can travel
		boy = That(this.raft).has('boy');
		girl = That(this.raft).has('girl');
		father = That(this.raft).has('father');
		mother = That(this.raft).has('mother');
		policeman = That(this.raft).has('policeman');
		criminal = That(this.raft).has('criminal');
		
		if (this.raft.seated.length === 0) {
			console.log('Raft is empty.');
			return false;
		}
		if (this.raft.seated.length === 1 && criminal) {
			console.log('Criminal can\'t travel alone.');
			return false;
		}
		if (criminal && !policeman) {
			console.log('Criminal can\'t travel without policeman.');
			return false;
		}
		if ((boy || girl) && !(mother || father || policeman)) {
			console.log('Children can\'t travel alone.');
			return false;
		}
		if ((boy && mother) || (girl && father)) {
			console.log('Children can\'t travel with opposite gender parent');
			return false;
		}
		
		var policemanOnRaft = policeman;
		
		//Check the opposite side
		if (this.raft.side === 'left') {
			side = 'right';
		} else {
			side = 'left'
		}
		chars = [];
		for (var i = 0, len = this.characters.length; i < len; i++) {
			if (this.characters[i].side === side) {
				chars.push(this.characters[i]);
			}
		};
		if (!policemanOnRaft && That(chars).has('criminal') && !That(chars).has('policeman')) {
			console.log('Error 37!');
			return false;
		}
		if (mother && That(chars).has('boy') && That(chars).hasNo('father')) {
			return false;
		}
		if (father && That(chars).has('girl') && That(chars).hasNo('mother')) {
			return false;
		}
		
		//Check is the side the raft is on is valid
		side = this.raft.side;
		chars = [];
		for (var i = 0, len = this.characters.length; i < len; i++) {
			if (this.characters[i].side === side) {
				chars.push(this.characters[i]);
			}
		};
		
		boy = That(chars).has('boy');
		girl = That(chars).has('girl');
		father = That(chars).has('father');
		mother = That(chars).has('mother');
		policeman = That(chars).has('policeman');
		criminal = That(chars).has('criminal');
		
		if (chars.length > 1 && criminal && !policeman) {
			return false;
		}
		if (boy && mother && !father) {
			return false;
		}
		if (girl && father && !mother) {
			return false;
		}
		//Finally:
		return true;
	};
	
	Validator.prototype.travel = function() {
		//This will animate:
		// 1 -> Raft
		
		// 2 -> Characters on the raft
		
		// 3 -> Arrow button
		
	};
	
	return Validator;
})();
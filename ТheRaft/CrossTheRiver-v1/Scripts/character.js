var Character = (function(){
	'use strict';
	
	//For testing only:
	var scale = 0.5;
	//End testing
	
	function Character(data, raft, imgList, layer) {
		this.position = data.position;
		this.name = data.name;
		this.role = data.role;
		this.side = 'left';
		this.seat = null;
		this.raft = raft;
		this.image = imgList.getImage(this.name);
		this.layer = layer;
		this.inAnimation = false;
		this.animation = null;
	}
	
	Character.prototype.onClick = function() {
		if (this.inAnimation) {
			return;
		}
		var self = this;
		//check if character is on the raft then move it back
		if (this.side === 'raft') {
			console.log('returning from raft');
			this.inAnimation = true;
			this.animation = new Kinetic.Tween({
				node: this.player,
				x: this.position[this.raft.side].x,
				y: this.position[this.raft.side].y,
				duration: 0.7,
				onFinish: function() {
					self.inAnimation = false;
				}
			});
			this.side = this.raft.side;
			this.raft.unseat(this);
			this.animation.play();
			return;
		}
		if (!this.raft.hasFreeSeats()) {
			//play disabled sound
			return;
		}
		//first check if character and rift are on the same side
		if (this.side !== this.raft.side) {
			return;
		}
		//then get position for animation, assign true to the seat of the raft
		//assing the opposite side for the character and start animation
		console.log('going to raft, side: ' + this.raft.side);
		var goto = this.raft.takeASeat(this);
		this.side = 'raft';
		this.seat = goto.seat;
		this.inAnimation = true;
		this.animation = new Kinetic.Tween({
			node: this.player,
			x: goto.x,
			y: goto.y,
			duration: 0.7,
			onFinish: function() {
				self.inAnimation = false;
			}
		});
		this.animation.play();
	};
	
	Character.prototype.init = function () {
		var self = this;
		this.player = new Kinetic.Image({
			x: this.position[this.side].x,
			y: this.position[this.side].y,
			image: this.image,
			scaleX: scale,
			scaleY: scale
		});
		this.player.on('click', function(){
			self.onClick();
		})
		this.layer.add(this.player);
	};
	
	return Character;
})();
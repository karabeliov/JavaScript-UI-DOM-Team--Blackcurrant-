var Raft = (function(){
	'use strict';
	
	function Raft(data, imgList, layer) {
		this.position = data.position;
		this.side = 'left';
		this.seats = data.seats;
		this.seatsTaken = {left: false, right : false};
		this.seated =[];
		this.image = imgList.getImage('raft');
		this.inAnimation = false;
		this.layer = layer;
		this.animation = null;
	}
	
	Raft.prototype.travel = function() {
		if (this.inAnimation) {
			return;
		}
		var self = this;
		if (this.side === 'left') {
			this.inAnimation = true;
			this.side = 'right';
			this.animation = new Kinetic.Tween({
				node: self.player,
				x: self.position.right.x,
				y: self.position.right.y,
				duration: 0.7,
				onFinish: function(){
					self.inAnimation = false;
				}
			});
			this.animation.play();
		} else {
			this.inAnimation = true;
			this.side = 'left';
			this.animation = new Kinetic.Tween({
				node: self.player,
				x: self.position.left.x,
				y: self.position.left.y,
				duration: 0.7,
				onFinish: function(){
					self.inAnimation = false;
				}
			});
			this.animation.play();
		}
	};
	
	Raft.prototype.unseat = function (c) {
		var reseated = [];
		if (this.seated.length > 0) {
			if (c.seat !== 'none') {
				this.seatsTaken[c.seat] = false;
			}
			for (var i = 0, len = this.seated.length; i < len; i++) {
				if (c.name !== this.seated[i].name) {
					reseated.push(this.seated[i]);
				}
			}
			this.seated = reseated;
		}
	}
	
	Raft.prototype.takeASeat = function (c) {
		if (this.seated.length < 2) {
			this.seated.push(c);
			if (!this.seatsTaken.left) {
				this.seatsTaken.left = true;
				return {
					x: this.seats.seat1.position[this.side].x,
					y: this.seats.seat1.position[this.side].y,
					seat: 'left'
					
				}
			} else {
				this.seatsTaken.right = true;
				return {
					x: this.seats.seat2.position[this.side].x,
					y: this.seats.seat2.position[this.side].y,
					seat: 'right'
				}
			}
		} else {
			throw 'All seats are taken. Make sure you check with raft.hasFreeSeats() for free seats first!';
		}
	};
 	
	Raft.prototype.hasFreeSeats = function () {
		return (this.seated.length < 2);
	};
	
	Raft.prototype.init = function () {
		var self = this;
		this.player = new Kinetic.Image({
			x: this.position[this.side].x,
			y: this.position[this.side].y,
			image: this.image
		});
		this.player.on('click', function(){
			self.travel();
		});
		this.layer.add(this.player);
		this.layer.batchDraw();
	};
	
	return Raft;
})();
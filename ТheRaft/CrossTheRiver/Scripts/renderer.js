var renderer = (function () {

	renderer = Object.create({});

	Object.defineProperty(renderer, 'canvasRenderer', {
		value: function (selector) {
			if (selector instanceof HTMLCanvasElement) {
				this.canvas = selector;
			}
			else if (typeof selector === 'string') {
				this.canvas = document.querySelector(selector);
			}
			return this;
		}
	});

	Object.defineProperty(renderer, 'drawFather', {
		value: function (canvas, father) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "black";
			ctx.strokeStyle = "black";

			var position = father.getPosition();
			ctx.fillRect(position.x, position.y, father.size, father.size);
			ctx.strokeRect(position.x, position.y, father.size, father.size);
		}
	});
	Object.defineProperty(renderer, 'drawMother', {
		value: function (canvas, mother) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "pink";
			ctx.strokeStyle = "black";

			var position = mother.getPosition();
			ctx.fillRect(position.x, position.y, mother.size, mother.size);
			ctx.strokeRect(position.x, position.y, mother.size, mother.size);
		}
	});

	Object.defineProperty(renderer, 'drawSon', {
		value: function (canvas, son) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "blue";
			ctx.strokeStyle = "black";

			var position = son.getPosition();
			ctx.fillRect(position.x, position.y, son.size, son.size);
			ctx.strokeRect(position.x, position.y, son.size, son.size);
		}
	});
	Object.defineProperty(renderer, 'drawDaughter', {
		value: function (canvas, daughter) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "pink";
			ctx.strokeStyle = "red";

			var position = daughter.getPosition();
			ctx.fillRect(position.x, position.y, daughter.size, daughter.size);
			ctx.strokeRect(position.x, position.y, daughter.size, daughter.size);
		}
	});
	Object.defineProperty(renderer, 'drawCop', {
		value: function (canvas, cop) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "red";
			ctx.strokeStyle = "black";

			var position = cop.getPosition();
			ctx.fillRect(position.x, position.y, cop.size, cop.size);
			ctx.strokeRect(position.x, position.y, cop.size, cop.size);
		}
	});
	Object.defineProperty(renderer, 'drawPrisoner', {
		value: function (canvas, prisoner) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "red";
			ctx.strokeStyle = "green";

			var position = prisoner.getPosition();
			ctx.fillRect(position.x, position.y, prisoner.size, prisoner.size);
			ctx.strokeRect(position.x, position.y, prisoner.size, prisoner.size);
		}
	});
	Object.defineProperty(renderer, 'drawRiver', {
		value: function (canvas, river) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "red";
			ctx.strokeStyle = "green";

			var position = river.getPosition();
			ctx.fillRect(position.x, position.y, river.size, river.size);
			ctx.strokeRect(position.x, position.y, river.size, river.size);
		}
	});
	Object.defineProperty(renderer, 'drawRaft', {
		value: function (canvas, raft) {
			var ctx = this.canvas.getContext("2d");

			ctx.fillStyle = "red";
			ctx.strokeStyle = "green";

			var position = raft.getPosition();
			ctx.fillRect(position.x, position.y, raft.size, raft.size);
			ctx.strokeRect(position.x, position.y, raft.size, raft.size);
		}
	});
		Object.defineProperty(renderer,'drawTree',{
		value:function(canvas, tree){
			var ctx = this.canvas.getContext("2d");
		
			ctx.fillStyle = "red";
			ctx.strokeStyle = "green";
	
		var position = tree.getPosition();
		ctx.fillRect(position.x, position.y, tree.size, tree.size);
		ctx.strokeRect(position.x, position.y, tree.size, tree.size);
		}
	});

	return renderer;
} ());
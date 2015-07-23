var gameObject = (function(){
	gameObject = Object.create({});
	Object.defineProperty(gameObject,'init',{
		value: function(x, y, size){
			this.x = x;
			this.y = y;
			this.size = size;
			return this;
		}
	});
	Object.defineProperty(gameObject,'x',{
		get:function(){
			return this._x;
		},
		set:function(value){
			validator.isNumber(value,'x coordinate');
			validator.isPositiveNumber(value,'x coordinate');
			this._x = value;
		}
	});
	Object.defineProperty(gameObject,'y',{
		get: function(){
			return this._y;
		},
		set:function(value){
			validator.isNumber(value,'y coordinate');
			validator.isPositiveNumber(value,'y coordinate');
			this._y = value;
		}
	});
	Object.defineProperty(gameObject,'size',{
		get:function(){
			return this._size;
		},
		set:function(value){
			validator.isNumber(value,'size');
			this._size = value;
		}
	});
	Object.defineProperty(gameObject,'getPosition',{
		value: function(){
			return {
				x: this.x,
				y: this.y
			}
		}
	});
	return gameObject;
}())
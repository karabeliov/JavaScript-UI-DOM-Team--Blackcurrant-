
	var canvasID = renderer.canvasRenderer("#container");
	var newGame = Object.create(game);
	newGame.init(canvasID);
	newGame.getGame();

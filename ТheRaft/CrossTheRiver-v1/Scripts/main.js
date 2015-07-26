window.onload = (function () {
    'use strict';

    var gameStage = new Kinetic.Stage({
        container: 'game',
        width: game.width,
        height: game.height
    });
    
    var gameLayer = new Kinetic.Layer();
    var images, raft, characters = [], validator;
    
    //Create load screen
    var loadscreen = new Kinetic.Layer();
    var loading = new Kinetic.Text({
        x: gameStage.width() / 2 - 200,
        y: 350,
        text: 'Loading...',
        fontSize: 20,
        fontFamily: 'Verdana',
        fill: 'gray'
    });
    loadscreen.add(loading);
    gameStage.add(loadscreen);
    loadscreen.batchDraw();
    
    function init() {
        images = new ImageList();
        images.enlist(assets.images);
        images.onProgress(loadingProgress);
        images.onLoad(loadingComplete);
        images.preload();
    }
    
    function loadingProgress(p) {
        loading.setText('Loading... ' + p + '%');
        loadscreen.batchDraw();
    }
    
    function loadingComplete() {
        loading.setFontSize(40);
        loading.setX(gameStage.width() / 2 - 100);
        loading.setText('[ P L A Y ]');
        loadscreen.batchDraw();
        game.status = 'playing';
        loadscreen.on('click', start);
    }
    
    //This is the enclosing function of the actual game
    function start() {
        var gameWon = false;
        var bg = images.getImage('background');
        var background = new Kinetic.Image({
            x: 0,
            y: 0,
            image: bg
        });
        var bgLayer = new Kinetic.Layer();
        
        //Removing loading screen
        loading.remove();
        loadscreen.remove();
        
        //Initializing background
        bgLayer.add(background);
        gameStage.add(bgLayer);
        bgLayer.batchDraw();
        
        //Initializing foreground and playing layer(s)
        gameStage.add(gameLayer);
        
        //Initializing raft
        raft = new Raft(assets.raft, images, gameLayer);
        raft.init();
        
        //Initializing characters
        for (var i = 0, len = assets.characters.length; i < len; i++) {
            characters.push(new Character(assets.characters[i], raft, images, gameLayer));
            characters[i].init();
        }
        
        //Initialize traver button
        var arrowButton = images.getImage('arrow');
        arrowButton = new Kinetic.Image({
            x: assets.arrow.position.left.x,
            y: assets.arrow.position.left.y,
            image: arrowButton,
            scaleX: 0.6,
            scaleY: 0.6,
        });
        arrowButton.on('click', function(){
            if (gameWon) {
                return;
            }
            //console.log(validator.validateMove());
            if (validator.validateMove()) {
                raft.travel();
                game.movesMade++;
                if (raft.side === 'left') {
                    new Kinetic.Tween({
                        node: arrowButton,
                        x: 310,
                        scaleX: 0.6,
                        duration: 1,
                        onFinish: function () {
                            setTimeout(hasWon, 1200);
                        }
                    }).play();
                } else {
                    new Kinetic.Tween({
                        node: arrowButton,
                        x: 510,
                        scaleX: -0.6,
                        duration: 1,
                        onFinish: function () {
                            setTimeout(hasWon, 1200);
                        }
                    }).play();
                }
            } else {
                playWrong();
            }
        });
        
        //Initializing validator
        var validator = new Validator(characters, raft);
        
        gameLayer.add(arrowButton);
        gameLayer.batchDraw();
        
        var wrongImg = images.getImage('wrong');
        var wrong = new Kinetic.Image({
            x: gameStage.width() / 2 - 50,
            y: 120,
            image: wrongImg
        });
        
        function playWrong() {
            gameLayer.add(wrong);
            gameLayer.batchDraw();
            setTimeout(function() {
                wrong.remove();
            }, 500);
        }
        //Some checks
        function hasWon() {
            var onTheRightSide = 0
            for (var i = 0, len = characters.length; i < len; i++) {
                if (characters[i].side === 'right') {
                    ++onTheRightSide;
                }
            }
            if (onTheRightSide === 8) {
                gameWon = true;
                Win();
            }
        }
        
    }
    
    function Win() {
        var won = new Kinetic.Text({
            x: gameStage.width() / 2 - 120,
            y: 100,
            text: 'You have won!',
            fontSize: 38,
            fontFamily: 'Verdana',
            fill: 'red'
        });
        var won2 = new Kinetic.Text({
            x: gameStage.width() / 2 - 120,
            y: 140,
            text: 'Moves made: ' + game.movesMade + '.',
            fontSize: 38,
            fontFamily: 'Verdana',
            fill: 'red'
        });
        gameLayer.add(won);
        gameLayer.add(won2);
        gameLayer.batchDraw();
    }
    
    init();

})();
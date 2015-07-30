window.onload = (function () {
    'use strict';
    
    /* globals ImageList, Kinetic, game, Timer, Character, Validator   */

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
        loading.remove();
        var logoimg = images.getImage('logo');
        var logo = new Kinetic.Image({
            x: 0,
            y: 0,
            image : logoimg
        });
        logo.on('click', start);
        loadscreen.add(logo);
        loadscreen.batchDraw();
        game.status = 'playing';
    }
    
    //This is the enclosing function of the actual game
    function start() {
        var gameWon = false, gameLost = false;
        var bg = images.getImage('background');
        var button = document.getElementById('restart');
        var instructionButton = document.getElementById('instructions');
        
        var background = new Kinetic.Image({
            x: 0,
            y: 0,
            image: bg
        });
        var bgLayer = new Kinetic.Layer();
        
        //Removing loading screen
        loading.remove();
        loadscreen.remove();
        
        //Initializing game timer
        var timer = new Timer();
        timer.init('checkTime');
        timer.setTimer(10 * 60);
        timer.trigger = function () {
            gameLost = true;
            Loss();
        };
        timer.startTimer();
        
        countMove();
        instructions();
        button.style.visibility = 'visible';
        instructionButton.style.visibility = 'visible';  
        
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
            scaleY: 0.6
        });

        arrowButton.on('click', function(){
            if (gameWon) {
                return;
            }

            //console.log(validator.validateMove());
            if (validator.validateMove()) {
                validator.travel();
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
            var onTheRightSide = 0;
            for (var i = 0, len = characters.length; i < len; i++) {
                if (characters[i].side === 'right') {
                    ++onTheRightSide;
                }
            }

            if (onTheRightSide === 8) {
                gameWon = true;
                timer.stopTimer();
                Win();
            }
        }
        
        function Loss() {
            var lost = document.getElementById('lost');
            arrowButton.off('click');
            var gll = new Kinetic.Layer();
            var blk = new Kinetic.Rect({
                x: 0,
                y: 0,
                width: gameStage.width(),
                height: gameStage.height(),
                fill: 'black',
                opacity: 0.7
            });
            var lt = new Kinetic.Text({
                x: gameStage.width() / 2 - 100,
                y: gameStage.height() / 2 - 20,
                fontFamily: 'Verdana',
                fontSize: 30,
                fontWeight: 'bold',
                text: 'You have lost!',
                fill: 'red'
            });
			
			 var lt2 = new Kinetic.Text({
                x: gameStage.width() / 2 - 80,
                y: gameStage.height() / 2 - 60 ,
                fontFamily: 'Verdana',
                fontSize: 30,
                fontWeight: 'bold',
                text: 'Time is up!',
                fill: 'red'
            });
			
            lost.style.visibility='visible';
            gll.add(blk);
            gll.add(lt);
			gll.add(lt2);
            gameStage.add(gll);
            gll.batchDraw();
        }
        
    }
    
    function Win() {
        var winEmot = document.getElementById('winEmot');
        var won = new Kinetic.Text({
            x: gameStage.width() / 2 - 120,
            y: 100,
            text: 'You have won!',
            fontSize: 38,
            fontFamily: 'Verdana',
            fill: 'red'
        });
        
        winEmot.style.visibility='visible';
        gameLayer.add(won);
        gameLayer.batchDraw();
    }

    init();
})();

document.getElementById('restart').addEventListener('click', function() {
    window.location.reload();
}, false);

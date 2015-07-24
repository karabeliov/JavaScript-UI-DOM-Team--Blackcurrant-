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
        loadscreen.on('click', start);
    }
    
    //This is the enclosing function of the actual game
    function start() {
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
        console.log(characters);
        
    }
    
    init();
    // var images = new ImageList();
    // images.enlist(assets.images);
    // images.onProgress(function(p){
    //     console.log(p + '%');
    // });
    // images.onLoad(function(){
    //     console.log('Done.');
    //     var bg = (images.getImage('background'));
    //     var back = new Kinetic.Layer();
    //     var bgimg = new Kinetic.Image({
    //         x: 0,
    //         y: 0,
    //         image: bg
    //     });
    //     back.add(bgimg);
    //     gameStage.add(back);
    //     back.batchDraw();
    //     var raft = new Raft(assets.raft, images);
    //     var characters = [];
    //     for (var i = 0, len = assets.characters.length; i < len; i++){
    //         characters.push(new Character(assets.characters[i], raft, images));
    //     }
    //     console.log(characters);
    //     console.log(raft);
    // });
    //images.preload();

})();
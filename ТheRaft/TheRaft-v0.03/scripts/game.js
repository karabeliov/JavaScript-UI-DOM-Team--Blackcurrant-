var game = (function () {
    'use strict';
    
    var game = {
        width: 800,
        height: 600,
        timed: false,
        movesMade: 0,
        timeElapsed: 0,
        timeToFinish: 15 * 60,
        status: 'loading'
    };

    return game;
}());
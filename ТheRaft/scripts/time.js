var Timer = (function(){
    'use strict';
    
    function Timer() {
        this.timeleft = null;
        this.trigger = null;
        this.display = null;
        this.active = false;
    }
    
    Timer.prototype.init = function (id) {
        this.display = document.getElementById(id);
    };
    
    Timer.prototype.setTimer = function (t) {
        this.timeleft = t;
    };
    
    Timer.prototype.startTimer = function () {
        this.active = true;
        this.tic();
    };
    
    Timer.prototype.stopTimer = function () {
        this.active = false;
    };
    
    Timer.prototype.tic = function () {
        var minutes, seconds, self = this;
        minutes = parseInt(this.timeleft / 60, 10);
        seconds = parseInt(this.timeleft % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        this.display = document.getElementById('checkTime');
        this.display.innerHTML = minutes + ':' + seconds;
        if (--this.timeleft < 0) {
            this.stopTimer();
            this.trigger();
            return;
        }
        if (this.active) {
           setTimeout(function() {
               self.tic();
           }, 1000);
        }
        
    };
    
    return Timer;
})();
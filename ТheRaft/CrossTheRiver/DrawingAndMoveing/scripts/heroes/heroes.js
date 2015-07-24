var maxEyeHeight = 14;
var width = 150;
var height = 210;

var canvas,
    context,
    images = {},
    totalResources = 6,
    numResourcesLoaded = 0,
    fps = 30,
    charX = 40,
    charY = 180,
    x,
    y,
    breathInc = 0.1,
    breathDir = 1,
    breathAmt = 0,
    breathMax = 2,
    curEyeHeight = maxEyeHeight,
    eyeOpenTime = 0,
    timeBtwBlinks = 2000,
    blinkUpdateTime = 200,
    brownBoy = document.getElementsByClassName('canvasDiv'),
    brownBoyStartTopPosition = '350px',
    brownBoyStartLeftPosition = '100px';

createHero(brownBoyStartTopPosition, brownBoyStartLeftPosition, brownBoy[0]);

function createHero(x, y, container) {
    var breathInterval = setInterval(updateBreath, 1000 / fps),
        blinkTimer = setInterval(updateBlink, blinkUpdateTime),
        moving = false,
        jumping = false;
        container.style.top = x,        
        container.style.left= y;

    container.onmousedown = function() {
        move();
        jumpHero(container);
    };
    
//============================================ Jumping ==================================
    function jumpHero(hero) {
        if(!jumping){
            jumping = true;
            hero.style.top = '250px';
            hero.style.left = '200px';
        }else{
            jumping = false;
            hero.style.top = brownBoyStartTopPosition;
            hero.style.left = brownBoyStartLeftPosition;
        }
        
    }

//============================================================================================
    function prepareCanvas(canvasDiv, canvasWidth, canvasHeight) {
        // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);

        if (typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d"); // Grab the 2d canvas context
        // Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
        //     context = document.getElementById('canvas').getContext("2d");

        drawPerson();
    }

    prepareCanvas(container, width, height);

    function drawPerson() {
        loadImage("leftArm");
        loadImage("legs");
        loadImage("torso");
        loadImage("rightArm");
        loadImage("head");
        loadImage("hair");

        loadImage("leftArm-jump");
        loadImage("legs-jump");
        loadImage("rightArm-jump");
    }

    function loadImage(name) {
        images[name] = new Image();
        images[name].onload = function () {
            resourceLoaded();
        };
        images[name].src = "images/brownBoy/" + name + ".png";
    }

    function resourceLoaded() {
        numResourcesLoaded += 1;

        if (numResourcesLoaded === totalResources) {
            setInterval(redraw, 1000 / fps);
        }
    }

    function redraw() {
        var x = charX;
        var y = charY;
        var jumpHeight = 45;
       

        canvas.width = canvas.width; // clears the canvas

        // Draw shadow
        if (moving) {
            drawEllipse(x + 40, y + 29, 100 - breathAmt, 4);
        } else {
            drawEllipse(x + 40, y + 29, 160 - breathAmt, 6);
        }

        if (moving) {
            y -= jumpHeight;         
        }

        if (moving) {
            context.drawImage(images["leftArm-jump"], x + 40, y - 42 - breathAmt);
        } else {
            context.drawImage(images["leftArm"], x + 40, y - 42 - breathAmt);
        }

        if (moving) {
            context.drawImage(images["legs-jump"], x, y- 6);
        } else {
            context.drawImage(images["legs"], x, y);
        }

        context.drawImage(images["torso"], x, y - 50);
        context.drawImage(images["head"], x - 10, y - 125 - breathAmt);
        context.drawImage(images["hair"], x - 37, y - 138 - breathAmt);

        if (moving) {
            context.drawImage(images["rightArm-jump"], x - 35, y - 42 - breathAmt);
        } else {
            context.drawImage(images["rightArm"], x - 15, y - 42 - breathAmt);
        }

        drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight); // Left Eye
        drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight); // Right Eye
    }

    function drawEllipse(centerX, centerY, width, height) {
        context.beginPath();
        context.moveTo(centerX, centerY - height / 2);

        context.bezierCurveTo(
            centerX + width / 2, centerY - height / 2,
            centerX + width / 2, centerY + height / 2,
            centerX, centerY + height / 2);

        context.bezierCurveTo(
            centerX - width / 2, centerY + height / 2,
            centerX - width / 2, centerY - height / 2,
            centerX, centerY - height / 2);

        context.fillStyle = "black";
        context.fill();
        context.closePath();
    }

    function updateBreath() {
        if (breathDir === 1) {  // breath in
            breathAmt -= breathInc;

            if (breathAmt < -breathMax) {
                breathDir = -1;
            }
        } else {  // breath out
            breathAmt += breathInc;

            if (breathAmt > breathMax) {
                breathDir = 1;
            }
        }
    }

    function updateBlink() {
        eyeOpenTime += blinkUpdateTime;

        if (eyeOpenTime >= timeBtwBlinks) {
            blink();
        }
    }

    function blink() {
        curEyeHeight -= 1;

        if (curEyeHeight <= 0) {
            eyeOpenTime = 0;
            curEyeHeight = maxEyeHeight;
        } else {
            setTimeout(blink, 10);
        }
    }

    function move() {
        if (!moving) {
            moving = true;
            setTimeout(land, 500);
        } else {
            moving = false;
        }
    }

    function land() {
        moving = false;
    }
}

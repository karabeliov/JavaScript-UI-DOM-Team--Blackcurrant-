var width = 800;
var height = 600;

var canvas = document.getElementById('water'),
    ctx = canvas.getContext('2d');

(function init(){
    var waterModel = new WaterModel(width, height, { });

    var waterCanvas = new WaterCanvas(width, height,
        "waterHolder", waterModel, {
            backgroundImageUrl:"images/check.jpg",
            //lightRefraction:9.0,
            //lightReflection:0.1
        });

    pushWater(waterModel);
}());

function pushWater(waterModel) {
    var finger = [
        [0.5, 1.0, 0.5],
        [1.0, 1.0, 1.0],
        [0.5, 1.0, 0.5]
    ];

    setInterval(function() {
        var checkWidth = Math.floor((Math.random() * 600) + 300),
            checkHeight = Math.floor((Math.random() * 400) + 200);

        waterModel.touchWater(checkWidth, checkHeight, 8, finger);
    }, 1000);
}
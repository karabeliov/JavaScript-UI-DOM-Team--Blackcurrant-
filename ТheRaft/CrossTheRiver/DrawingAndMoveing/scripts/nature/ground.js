(function () {
    var canvas = document.getElementById('ground');
    canvas.width = 800;
    canvas.height = 600;
    var ctx = canvas.getContext('2d');

    ctx.save();
    ctx.fillStyle = '#FFF';
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 100);
    ctx.lineTo(width, 100);
    ctx.lineTo(width, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    var gradient = ctx.createLinearGradient(0, 0, 800, 0);
    gradient.addColorStop(0,"#69F");
    gradient.addColorStop(0.6,"#FFF");
    gradient.addColorStop(0.8,"#FFF");
    gradient.addColorStop(1,"#69F");
    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, 800, 100);

    gradient = ctx.createLinearGradient(0, 0, 800, 0);
    gradient.addColorStop(0,"#030");
    gradient.addColorStop(0.2,"#060");
    gradient.addColorStop(0.7,"#FFF");
    gradient.addColorStop(1, "#060");
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.quadraticCurveTo(220, 30, width / 2, 40);
    ctx.quadraticCurveTo(430, 45, (width / 2) + 50, 70);
    ctx.quadraticCurveTo(420, 50, 460, 40);
    ctx.quadraticCurveTo(580, 75, 520, 75);
    ctx.quadraticCurveTo(630, 30, 650, 95);
    ctx.fill();
    ctx.moveTo(300, 100);
    ctx.quadraticCurveTo(100, 20, 0, 100);
    ctx.quadraticCurveTo(800, 100, 500, 100);
    ctx.quadraticCurveTo(700, 40, 800, 100);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#093';
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.quadraticCurveTo(600, 70, 800, 100);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    gradient = ctx.createLinearGradient(0, 0, 800, 500);
    gradient.addColorStop(0,"#960");
    gradient.addColorStop(0.6,"#CC0");
    gradient.addColorStop(0.8, "#CC0");
    gradient.addColorStop(1,"#960");
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(80, 100);
    ctx.quadraticCurveTo(240, 125, 220, 135);
    ctx.quadraticCurveTo(340, 160, 330, 165);
    ctx.quadraticCurveTo(470, 215, 450, 225);
    ctx.quadraticCurveTo(530, 260, 580, 305);
    ctx.quadraticCurveTo(600, 430, 660, 415);
    ctx.quadraticCurveTo(800, 580, 760, 600);
    ctx.lineTo(800, 600);
    ctx.lineTo(800, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    gradient = ctx.createLinearGradient(0, 0, 800, 500);
    gradient.addColorStop(0,"#080");
    gradient.addColorStop(0.3,"#0A0");
    gradient.addColorStop(0.55,"#0F0");
    gradient.addColorStop(0.8, "#0A0");
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(50, 99);
    ctx.quadraticCurveTo(70, 110, 60, 110);
    ctx.quadraticCurveTo(100, 150, 80, 140);
    ctx.quadraticCurveTo(110, 180, 110, 190);
    ctx.quadraticCurveTo(150, 210, 160, 240);
    ctx.quadraticCurveTo(170, 240, 170, 250);
    ctx.quadraticCurveTo(240, 260, 250, 280);
    ctx.quadraticCurveTo(250, 300, 280, 380);
    ctx.quadraticCurveTo(280, 400, 350, 480);
    ctx.quadraticCurveTo(360, 500, 350, 600);
    ctx.lineTo(0, 600);
    ctx.lineTo(0, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(80, 100);
    ctx.quadraticCurveTo(240, 120, 230, 130);
    ctx.quadraticCurveTo(350, 150, 340, 160);
    ctx.quadraticCurveTo(480, 210, 470, 220);
    ctx.quadraticCurveTo(610, 280, 600, 300);
    ctx.quadraticCurveTo(680, 420, 700, 400);
    ctx.quadraticCurveTo(760, 470, 800, 550);
    ctx.lineTo(800, 100);
    ctx.quadraticCurveTo(400, 85, 150, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}());
(function() {
    var canvas = document.getElementById('background'),
        ctx = canvas.getContext('2d'),
        width = screen.width,
        height = screen.height;

    canvas.width = width;
    canvas.height = height;

    var gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0,"#00C5FC");
    gradient.addColorStop(0.36,"#74D8ED");
    gradient.addColorStop(0.45,"#9BE0EF");
    gradient.addColorStop(0.6,"#CDEBF2");
    gradient.addColorStop(0.8, "#FFF");
    ctx.fillStyle = gradient;

    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#FFF';

    ctx.beginPath();
    ctx.arc(100, 100, 24, Math.PI, -Math.PI);
    ctx.arc(135, 100, 25, Math.PI, -Math.PI);
    ctx.arc(110, 130, 15, Math.PI, -Math.PI);
    ctx.arc(160, 130, 45, Math.PI, -Math.PI);
    ctx.arc(280, 120, 35, Math.PI, -Math.PI);
    ctx.arc(200, 140, 45, Math.PI, -Math.PI);
    ctx.arc(240, 110, 25, Math.PI, -Math.PI);
    ctx.arc(240, 150, 25, Math.PI, -Math.PI);
    ctx.lineTo(100, 140);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(135, 300, 25, Math.PI, -Math.PI);
    ctx.arc(155, 320, 15, Math.PI, -Math.PI);
    ctx.arc(165, 310, 25, Math.PI, -Math.PI);
    ctx.arc(195, 300, 15, Math.PI, -Math.PI);
    ctx.lineTo(150, 330);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(30, 450, 15, Math.PI, -Math.PI);
    ctx.arc(55, 470, 25, Math.PI, -Math.PI);
    ctx.arc(75, 460, 30, Math.PI, -Math.PI);
    ctx.arc(95, 490, 15, Math.PI, -Math.PI);
    ctx.arc(100, 460, 25, Math.PI, -Math.PI);
    ctx.lineTo(30, 470);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(430, 250, 25, Math.PI, -Math.PI);
    ctx.arc(455, 270, 35, Math.PI, -Math.PI);
    ctx.arc(475, 260, 30, Math.PI, -Math.PI);
    ctx.arc(495, 290, 15, Math.PI, -Math.PI);
    ctx.arc(500, 260, 25, Math.PI, -Math.PI);
    ctx.arc(550, 230, 45, Math.PI, -Math.PI);
    ctx.arc(500, 220, 25, Math.PI, -Math.PI);
    ctx.arc(550, 270, 25, Math.PI, -Math.PI);
    ctx.arc(600, 220, 35, Math.PI, -Math.PI);
    ctx.arc(580, 260, 15, Math.PI, -Math.PI);
    ctx.arc(500, 230, 25, Math.PI, -Math.PI);
    ctx.arc(520, 250, 25, Math.PI, -Math.PI);
    ctx.arc(430, 250, 25, Math.PI, -Math.PI);
    ctx.lineTo(500, 300);
    ctx.lineTo(430, 270);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(630, 170, 25, Math.PI, -Math.PI);
    ctx.arc(555, 190, 35, Math.PI, -Math.PI);
    ctx.arc(575, 180, 30, Math.PI, -Math.PI);
    ctx.arc(595, 210, 15, Math.PI, -Math.PI);
    ctx.arc(600, 180, 25, Math.PI, -Math.PI);
    ctx.arc(650, 150, 45, Math.PI, -Math.PI);
    ctx.arc(600, 140, 25, Math.PI, -Math.PI);
    ctx.arc(650, 190, 25, Math.PI, -Math.PI);
    ctx.arc(700, 140, 35, Math.PI, -Math.PI);
    ctx.arc(680, 180, 15, Math.PI, -Math.PI);
    ctx.arc(600, 150, 25, Math.PI, -Math.PI);
    ctx.lineTo(600, 200);
    ctx.lineTo(530, 170);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(830, 350, 25, Math.PI, -Math.PI);
    ctx.arc(855, 370, 35, Math.PI, -Math.PI);
    ctx.arc(875, 360, 30, Math.PI, -Math.PI);
    ctx.arc(895, 390, 15, Math.PI, -Math.PI);
    ctx.arc(900, 360, 25, Math.PI, -Math.PI);
    ctx.arc(950, 330, 45, Math.PI, -Math.PI);
    ctx.arc(900, 320, 25, Math.PI, -Math.PI);
    ctx.arc(950, 370, 25, Math.PI, -Math.PI);
    ctx.arc(800, 320, 35, Math.PI, -Math.PI);
    ctx.arc(980, 360, 15, Math.PI, -Math.PI);
    ctx.arc(900, 330, 25, Math.PI, -Math.PI);
    ctx.arc(930, 360, 15, Math.PI, -Math.PI);
    ctx.arc(830, 360, 25, Math.PI, -Math.PI);
    ctx.closePath();
    ctx.fill();


    ctx.beginPath();
    ctx.arc(1030, 50, 25, Math.PI, -Math.PI);
    ctx.arc(1055, 70, 35, Math.PI, -Math.PI);
    ctx.arc(1075, 60, 30, Math.PI, -Math.PI);
    ctx.arc(1095, 90, 15, Math.PI, -Math.PI);
    ctx.arc(1100, 60, 25, Math.PI, -Math.PI);
    ctx.arc(1150, 30, 45, Math.PI, -Math.PI);
    ctx.arc(1100, 20, 25, Math.PI, -Math.PI);
    ctx.arc(1150, 70, 25, Math.PI, -Math.PI);
    ctx.arc(1000, 20, 35, Math.PI, -Math.PI);
    ctx.arc(1180, 60, 15, Math.PI, -Math.PI);
    ctx.arc(1180, 60, 15, Math.PI, -Math.PI);
    ctx.arc(1040, 10, 45, Math.PI, -Math.PI);
    ctx.arc(1200, 100, 55, Math.PI, -Math.PI);
    ctx.arc(1100, 60, 35, Math.PI, -Math.PI);
    ctx.arc(1060, 30, 35, Math.PI, -Math.PI);
    ctx.arc(1230, 60, 35, Math.PI, -Math.PI);
    ctx.arc(1210, 60, 45, Math.PI, -Math.PI);
    ctx.arc(1260, 100, 25, Math.PI, -Math.PI);
    ctx.arc(1000, 60, 35, Math.PI, -Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(635, 500, 25, Math.PI, -Math.PI);
    ctx.arc(655, 520, 15, Math.PI, -Math.PI);
    ctx.arc(665, 510, 25, Math.PI, -Math.PI);
    ctx.arc(695, 500, 15, Math.PI, -Math.PI);
    ctx.lineTo(650, 530);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(835, 200, 25, Math.PI, -Math.PI);
    ctx.arc(855, 220, 15, Math.PI, -Math.PI);
    ctx.arc(865, 210, 25, Math.PI, -Math.PI);
    ctx.arc(895, 200, 15, Math.PI, -Math.PI);
    ctx.lineTo(850, 230);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1030, 450, 15, Math.PI, -Math.PI);
    ctx.arc(1055, 470, 25, Math.PI, -Math.PI);
    ctx.arc(1075, 460, 30, Math.PI, -Math.PI);
    ctx.arc(1095, 490, 15, Math.PI, -Math.PI);
    ctx.arc(1100, 460, 25, Math.PI, -Math.PI);
    ctx.lineTo(1030, 470);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(30, 450, 15, Math.PI, -Math.PI);
    ctx.arc(55, 470, 25, Math.PI, -Math.PI);
    ctx.arc(75, 460, 30, Math.PI, -Math.PI);
    ctx.arc(95, 490, 15, Math.PI, -Math.PI);
    ctx.arc(100, 460, 25, Math.PI, -Math.PI);
    ctx.lineTo(30, 470);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300, 400, 24, Math.PI, -Math.PI);
    ctx.arc(335, 400, 25, Math.PI, -Math.PI);
    ctx.arc(310, 430, 15, Math.PI, -Math.PI);
    ctx.arc(360, 430, 45, Math.PI, -Math.PI);
    ctx.arc(480, 420, 35, Math.PI, -Math.PI);
    ctx.arc(400, 440, 45, Math.PI, -Math.PI);
    ctx.arc(440, 410, 25, Math.PI, -Math.PI);
    ctx.arc(440, 450, 25, Math.PI, -Math.PI);
    ctx.lineTo(300, 440);
    ctx.closePath();
    ctx.fill();


    ctx.beginPath();
    ctx.arc(900, 200, 24, Math.PI, -Math.PI);
    ctx.arc(935, 200, 25, Math.PI, -Math.PI);
    ctx.arc(910, 230, 15, Math.PI, -Math.PI);
    ctx.arc(960, 230, 45, Math.PI, -Math.PI);
    ctx.arc(1080, 220, 35, Math.PI, -Math.PI);
    ctx.arc(1000, 240, 45, Math.PI, -Math.PI);
    ctx.arc(1040, 210, 25, Math.PI, -Math.PI);
    ctx.arc(1040, 250, 25, Math.PI, -Math.PI);
    ctx.lineTo(900, 240);
    ctx.closePath();
    ctx.fill();
}());
var scale = 1.0;

$(document).ready(function () {
    var status;
    var time_since_minutes;
    var canvas = $('#moccamaster');
    var ctx = $('#moccamaster')[0].getContext('2d');

    if (!canvas[0].getContext) {
        return console.log('ERR: ' + 'canvas.getContext not found.');
    }

    $.getJSON('http://kaffe.abakus.no/api/status', function (result) {
        status = result.coffee.status;
        time_since_minutes = result.coffee.time_since.minutes;
        updateScale(canvas);
        updateCanvasSize(ctx, status, time_since_minutes);
    });

    setInterval(function () {
        draw(ctx, status, time_since_minutes);
    }, 10000);

    $(window).resize( function () {
        updateScale(canvas);
        updateCanvasSize(ctx, status, time_since_minutes);
    });
});

function updateScale(canvas) {
    scale = canvas.parent().width() / 450;
}

function updateCanvasSize(ctx, status, time_since_minutes) {
    var canvas = document.querySelector('canvas');
    canvas.style.width ='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    draw(ctx, status, time_since_minutes);
}

function draw(ctx, status, minutes) {

    ctx.fillStyle = "rgb(0,0,0)"; //Black
    rect(ctx, 10, 368, 412, 53, 0, 20); // Bottom
    rect(ctx, 45, 420, 35, 10, 3, 2); //knob_left
    rect(ctx, 355, 420, 35, 10, 3, 2); //knob_right
    rect(ctx, 55, 133, 114, 14, 0, 5); // Stand_black_top
    rect(ctx, 55, 354, 114, 14, 0, 5); // Stand_black_bottom
    rect(ctx, 210, 354, 168, 14, 0, 5); // Heater
    rect(ctx, 380, 230, 47, 102, 0, 5); // Handle
    rect(ctx, 220, 220, 208, 13, 0, 7); // Bottle_separator
    rect(ctx, 175, 152, 198, 20, 0, 7); // trakt_bunn
    rect(ctx, 256, 112, 94, 47, 0, 7); // trakt_bunn_firkant
    rect(ctx, 226, 45, 154, 80, 32, 0); // trakt_hoved

    ctx.fillStyle = "rgb(141,131,122)"; //tan
    rect(ctx, 52, 150, 121, 201, 0, 10); // Stand
    rect(ctx, 30, 368, 377, 53, 0, 0);//bottom_inner
    rect(ctx, 44, 377, 41, 17, 0, 20); //Button_left
    rect(ctx, 160, 15, 164, 14, 0, 5); // filler

    ctx.fillStyle = "rgb(206,206,206)"; //gray
    rect(ctx, 44, 377, 345, 33, 0, 20); //Inner_bottom

    ctx.fillStyle = "rgb(0,0,0)"; //black
    rect(ctx, 66, 385, 41, 17, 0, 5); //Button_left
    rect(ctx, 115, 385, 41, 17, 0, 5); //Button_right

    ctx.fillStyle = "rgb(75,75,75)"; //buttongray
    rect(ctx, 78, 387, 26, 12, 0, 5); //Button_inner_left
    rect(ctx, 127, 387, 26, 12, 0, 5); // Button_inner_right

    ctx.fillStyle = "rgb(241, 241, 241)"; //white
    rect(ctx, 210, 233, 169, 118, 0, 25); //bottle
    rect(ctx, 210, 186, 165, 33, 0, 20); //bottle_top

    ctx.fillStyle = "rgb(217, 220, 225)"; //grayblue
    rect(ctx, 218, 241, 153, 102, 0, 25); //bottle_inside
    rect(ctx, 220, 194, 143, 18, 0, 10); //bottle_top_inside

    ctx.fillStyle = "rgb(219, 202, 187)"; //tan light
    rect(ctx, 387, 240, 33, 86, 0, 5); // Handle_inner

    ctx.fillStyle = "rgb(241, 241, 241)"; //white
    rect(ctx, 30, 15, 163, 115, 20, 10); //rect_left

    ctx.fillStyle = "rgb(217, 220, 225)"; //grayblue
    rect(ctx, 41, 23, 140, 100, 15, 10); //rect_left_inner

    ctx.fillStyle = "rgb(35,35,35)"; //dark dark grey
    rect(ctx, 44, 25, 134, 14, 0, 5); // lokk_left_bottom
    rect(ctx, 49, 5, 125, 20, -5, 4); //lokk_left_top
    rect(ctx, 225, 30, 156, 20, 0, 7); // trakt_topp

    if (minutes < 7 && status === true) {
        ctx.fillStyle = "rgb(22,135,181)"; //blue
        rect(ctx, 46 + (11 / 6) * minutes, 43 + (69 / 6) * minutes, 131 + (-22 / 6) * minutes, 80 + (-70 / 6) * minutes, 12 + (-11 / 6) * minutes, 10 + (-4 / 6) * minutes); //water
        ctx.fillStyle = "rgb(45,27,19)"; //brown
        rect(ctx, 218, 316 + (-50 / 6) * (minutes + 1), 153, 27 + (50 / 6) * (minutes + 1), 0, 25); //coffee
        rect(ctx, 290, 241, 20, 101, 0, 0); //coffee
        rect(ctx, 290, 201, 20, 10, 0, 0); //coffee
    } else if (minutes <= 19 && minutes >= 7 && status === true) {
        ctx.fillStyle = "rgb(45,27,19)"; //brown
        var temp = minutes - 6;
        rect(ctx, 218, 258 + (52 * temp) / 14, 153, 85 - (52 * temp) / 14, 0, 25); //coffee
        //rect (ctx,218, 306(-52), 153, 37(+52), 0, 25); //coffee
    } else if (status === true) {
        ctx.fillStyle = "rgb(45,27,19)"; //brown
        rect(ctx, 218, 306, 153, 37, 0, 25); //coffee
    }

    ctx.fillStyle = "rgb(241, 241, 241)"; //white
    rect(ctx, 230, 250, 25, 75, 0, 15); //shine_rect_right

    ctx.fillStyle = "rgb(0,0,0)"; //black
    rect(ctx, 30, 15, 164, 14, 0, 5); // lokk_left_middle
    rect(ctx, 95, 45, 35, 5, 0, 3); //water_level_1
    rect(ctx, 95, 65, 35, 5, 0, 3); //water_level_2
    rect(ctx, 95, 85, 35, 5, 0, 3); //water_level_3
    rect(ctx, 95, 105, 35, 5, 0, 3); //water_level_4
    rect(ctx, 360, 190, 68, 40, 0, 10); // lokk_right_right
    rect(ctx, 230, 175, 143, 27, 0, 10); // lokk_right_top
    rect(ctx, 93, 390, 7, 7, 0, 4); //Button_light_left
    rect(ctx, 142, 390, 7, 7, 0, 4); //Button_light_right

    if (status) {
        ctx.fillStyle = "rgb(232, 20, 24)"; //buttonred
        rect(ctx, 93, 390, 7, 7, 0, 4); //Button_light_left
        rect(ctx, 142, 390, 7, 7, 0, 4); //Button_light_right
    }

}
function rect(ctx, x, y, width, height, offset, radius) {
    ctx.beginPath();
    ctx.moveTo((x + radius) * scale, y * scale);
    ctx.lineTo((x + width - radius) * scale, y * scale);
    ctx.quadraticCurveTo((x + width) * scale, y * scale, (x + width) * scale, (y + radius) * scale);
    ctx.lineTo((x + width - offset) * scale, (y + height - radius) * scale);
    ctx.quadraticCurveTo((x + width - offset) * scale, (y + height) * scale, (x + width - radius - offset) * scale, (y + height) * scale);
    ctx.lineTo((x + offset + radius) * scale, (y + height) * scale);
    ctx.quadraticCurveTo((x + offset) * scale, (y + height) * scale, (x + offset) * scale, (y + height - radius) * scale);
    ctx.lineTo(x * scale, (y + radius) * scale);
    ctx.quadraticCurveTo(x * scale, y * scale, (x + radius) * scale, y * scale);
    ctx.closePath();

    ctx.fill();
}
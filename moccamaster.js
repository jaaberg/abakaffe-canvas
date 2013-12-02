setInterval(function(){ 
  draw();
}, 60000);

function draw(){
  var canvas = document.getElementById('moccamaster');

  if (canvas.getContext){
    $.getJSON('http://kaffe.abakus.no/api/status', function(obj) {
      var status = obj.coffee.status; 
      var minutes = obj.coffee.time_since.minutes;
      var ctx = canvas.getContext('2d');

  		ctx.fillStyle = "rgb(0,0,0)"; //Black
      roundRect (ctx, 10, 368, 412, 53, 0, 20, true); // Bottom
      roundRect (ctx, 45, 420, 35, 10, 3, 2, true); //knob_left
      roundRect (ctx, 355, 420, 35, 10, 3, 2, true); //knob_right
      roundRect (ctx, 55, 133, 114, 14, 0, 5, true); // Stand_black_top
      roundRect (ctx, 55, 354, 114, 14, 0, 5, true); // Stand_black_bottom
      roundRect (ctx, 210, 354, 168, 14, 0, 5, true); // Heater
      roundRect (ctx, 380, 230, 47, 102, 0, 5, true); // Handle
      roundRect (ctx, 220, 220, 208, 13, 0, 7, true); // Bottle_separator
      roundRect (ctx, 175, 152, 198, 20, 0, 7, true); // trakt_bunn
      roundRect (ctx, 256, 112, 94, 47, 0, 7, true); // trakt_bunn_firkant
      roundRect (ctx, 226, 45, 154, 80, 32, 0, true); // trakt_hoved

      ctx.fillStyle = "rgb(141,131,122)"; //tan
  		roundRect (ctx, 52, 150, 121, 201, 0, 10, true); // Stand
  		roundRect (ctx, 30, 368, 377, 53, 0, 0, true);//bottom_inner
  		roundRect (ctx, 44, 377	, 41, 17, 0, 20, true); //Button_left
  		roundRect (ctx, 160, 15, 164, 14, 0, 5, true); // filler

      ctx.fillStyle = "rgb(206,206,206)"; //gray
      roundRect (ctx, 44, 377 , 345, 33, 0, 20, true); //Inner_bottom
  		
  		ctx.fillStyle = "rgb(0,0,0)"; //black
  		roundRect (ctx, 66, 385, 41, 17, 0, 5, true); //Button_left
  		roundRect (ctx, 115, 385, 41, 17, 0, 5, true); //Button_right

  		ctx.fillStyle = "rgb(75,75,75)"; //buttongray
  		roundRect (ctx, 78, 387, 26, 12, 0, 5, true); //Button_inner_left
  		roundRect (ctx, 127, 387, 26, 12, 0, 5, true); // Button_inner_right

  		ctx.fillStyle = "rgb(241, 241, 241)"; //white 		
  		roundRect (ctx,210, 233, 169, 118, 0, 25, true); //bottle
  		roundRect (ctx,210, 186, 165, 33, 0, 20, true); //bottle_top

  		ctx.fillStyle = "rgb(217, 220, 225)"; //grayblue
  		roundRect (ctx,218, 241, 153, 102, 0, 25, true); //bottle_inside
  		roundRect (ctx,220, 194, 143, 18, 0, 10, true); //bottle_top_inside

  		ctx.fillStyle = "rgb(219, 202, 187)"; //tan light
  		roundRect (ctx, 387, 240, 33, 86, 0, 5, true); // Handle_inner

      ctx.fillStyle = "rgb(241, 241, 241)"; //white
      roundRect (ctx, 30, 15, 163, 115, 20, 10, true); //roundRect_left

      ctx.fillStyle = "rgb(217, 220, 225)"; //grayblue
      roundRect (ctx, 41, 23, 140, 100, 15, 10, true); //roundRect_left_inner

      ctx.fillStyle = "rgb(35,35,35)"; //dark dark grey
  		roundRect (ctx, 44, 25, 134, 14, 0, 5, true); // lokk_left_bottom
  		roundRect (ctx, 49, 5, 125, 20, -5, 4, true); //lokk_left_top
  		roundRect (ctx, 225, 30, 156, 20, 0, 7, true); // trakt_topp

      if ( minutes < 7 && status === true ){
        ctx.fillStyle = "rgb(22,135,181)"; //blue
        roundRect (ctx, 46+(11/6)*minutes, 43+(69/6)*minutes, 131+(-22/6)*minutes, 80+(-70/6)*minutes, 12+(-11/6)*minutes, 10+(-4/6)*minutes, true); //water
        ctx.fillStyle = "rgb(45,27,19)"; //brown
        roundRect (ctx,218, 316+(-50/6)*(minutes+1), 153, 27+(50/6)*(minutes+1), 0, 25, true); //coffee
        roundRect (ctx,290, 241, 20, 101, 0, 0, true); //coffee 
        roundRect (ctx,290, 201, 20, 10, 0, 0, true); //coffee
      } else if ( status === true ) {
        ctx.fillStyle = "rgb(45,27,19)"; //brown
        roundRect (ctx,218, 316+(-58), 153, 27+(58), 0, 25, true); //coffee
      }

      ctx.fillStyle = "rgb(241, 241, 241)"; //white
      roundRect (ctx, 230, 250, 25, 75, 0, 15, true); //shine_roundRect_right

      ctx.fillStyle = "rgb(0,0,0)"; //black
      roundRect (ctx, 30, 15, 164, 14, 0, 5, true); // lokk_left_middle
      roundRect (ctx, 95, 45, 35, 5, 0, 3, true); //water_level_1
      roundRect (ctx, 95, 65, 35, 5, 0, 3, true); //water_level_2
      roundRect (ctx, 95, 85, 35, 5, 0, 3, true); //water_level_3
      roundRect (ctx, 95, 105, 35, 5, 0, 3, true); //water_level_4
      roundRect (ctx, 360, 190, 68, 40, 0, 10, true); // lokk_right_right
      roundRect (ctx, 230, 175, 143, 27, 0, 10, true); // lokk_right_top
      roundRect (ctx, 93, 390, 7, 7, 0, 4, true); //Button_light_left
      roundRect (ctx, 142, 390, 7, 7, 0, 4, true); //Button_light_right

      if (status){
        ctx.fillStyle = "rgb(232, 20, 24)"; //buttonred
        roundRect (ctx, 93, 390, 7, 7, 0, 4, true); //Button_light_left
        roundRect (ctx, 142, 390, 7, 7, 0, 4, true); //Button_light_right
      }
    });
  }
}


function roundRect(ctx, x, y, width, height, offset, radius, fill, stroke) {
  var scale = 1;
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo((x + radius)*scale, y*scale);
  ctx.lineTo((x + width - radius)*scale, y*scale);
  ctx.quadraticCurveTo((x + width)*scale, y*scale, (x + width)*scale, (y + radius)*scale);
  ctx.lineTo((x + width -offset)*scale, (y + height - radius)*scale);
  ctx.quadraticCurveTo((x + width-offset)*scale, (y + height)*scale, (x + width - radius -offset)*scale, (y + height)*scale);
  ctx.lineTo((x+offset + radius)*scale, (y + height)*scale);
  ctx.quadraticCurveTo((x+offset)*scale, (y + height)*scale, (x+offset)*scale, (y + height - radius)*scale );
  ctx.lineTo(x*scale, (y + radius)*scale);
  ctx.quadraticCurveTo(x*scale, y*scale, (x + radius)*scale, y*scale);
  ctx.closePath();
  
  if (fill) {
    ctx.fill();
  }        
}

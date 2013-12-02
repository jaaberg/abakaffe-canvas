
$.getJSON('http://kaffe.abakus.no/api/status', function(obj) {
      $(".minutes").append(obj.coffee.time_since.minutes);

      if (obj.coffee.status) {
        $(".turnedOn").append("på");
      } else {
        $(".turnedOn").append("av");
      }
      
      if (obj.coffee.time_since.hours > 0) {
        $(".hours").append(obj.coffee.time_since.hours + " timer og ");
      }
      if ( obj.coffee.time_since.minutes < 4 && obj.coffee.status === true) {
        draw(true, 1);
      } else if (obj.coffee.time_since.minutes < 8 && obj.coffee.status === true) {
        draw(true, 2);
      } else if (obj.coffee.time_since.minutes < 12 && obj.coffee.status === true) {
        draw(true, 3);
      } else if (obj.coffee.status === true) {
        draw(true, 4);
      } else {
        draw(false, 0);
      }
});


function draw(status, stage){
	var scale = 1;
  var canvas = document.getElementById('moccamaster');

  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

		ctx.fillStyle = "rgb(0,0,0)"; //Black
    roundRect (ctx, 10, 368, 417, 52, 0, 20, true); // Bottom
    roundRect (ctx, 45, 420, 35, 10, 3, 2, true); //knob_left
    roundRect (ctx, 355, 420, 35, 10, 3, 2, true); //knob_right
    roundRect (ctx, 55, 133, 114, 14, 0, 5, true); // Stand_black_top
    roundRect (ctx, 55, 354, 114, 14, 0, 5, true); // Stand_black_bottom
    roundRect (ctx, 210, 354, 168, 14, 0, 5, true); // Heater
    roundRect (ctx, 380, 230, 47, 102, 0, 5, true); // Handle
    roundRect (ctx, 220, 220, 208, 13, 0, 7, true); // Bottle_separator
    roundRect (ctx, 177, 152, 197, 20, 0, 7, true); // trakt_bunn
    roundRect (ctx, 256, 112, 93, 47, 0, 7, true); // trakt_bunn_firkant
    roundRect (ctx, 225, 45, 154, 80, 32, 0, true); // trakt_hoved

    ctx.fillStyle = "rgb(141,131,122)"; //tan
		roundRect (ctx, 52, 150, 121, 201, 0, 10, true); // Stand
		roundRect (ctx, 30, 368, 377, 53, 0, 0, true);//bottom_inner
		roundRect (ctx, 44, 377	, 41, 17, 0, 20, true); //Button_left
		roundRect (ctx, 160, 15, 164, 14, 0, 5, true); // filler

    ctx.fillStyle = "rgb(206,206,206)"; //gray
    roundRect (ctx, 44, 377 , 345, 33, 0, 20, true); //Inner_bottom
		
		ctx.fillStyle = "rgb(0,0,0)";
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
		roundRect (ctx, 45, 25, 134, 14, 0, 5, true); // lokk_left_bottom
		roundRect (ctx, 50, 5, 125, 20, -5, 4, true); //lokk_left_top
		roundRect (ctx, 224, 30, 156, 20, 0, 7, true); // trakt_topp

    ctx.fillStyle = "rgb(22,135,181)"; //blue
    if (stage === 1) {
      roundRect (ctx, 43, 43, 137, 80, 12, 10, true); //roundRect_left_inner 
    } else if (stage === 2){
      roundRect (ctx, 51, 73, 120, 50, 7, 10, true); //roundRect_left_inner 
      ctx.fillStyle = "rgb(45,27,19)"; //brown
      roundRect (ctx,218, 321, 153, 22, 0, 15, true); //bottle_inside 
      roundRect (ctx,290, 241, 20, 101, 0, 0, true); //bottle_inside 
      roundRect (ctx,290, 201, 20, 10, 0, 0, true); //bottle_inside   
    } else if (stage === 3) {
      roundRect (ctx, 57, 103, 109, 20, 1, 6, true); //roundRect_left_inner
      ctx.fillStyle = "rgb(45,27,19)"; //brown
      roundRect (ctx,218, 291, 153, 52, 0, 25, true); //bottle_inside  
      roundRect (ctx,290, 241, 20, 101, 0, 0, true); //bottle_inside 
      roundRect (ctx,290, 201, 20, 10, 0, 0, true); //bottle_inside
    } else if (stage === 4) {
      ctx.fillStyle = "rgb(45,27,19)"; //brown
      roundRect (ctx,218, 261, 153, 82, 0, 25, true); //bottle_inside
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

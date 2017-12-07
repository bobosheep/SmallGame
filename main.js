px=10;
py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail=5;
start=0;
highscore = 0;
$(document).ready(function(){
	canv = $('.bg');
	ctx = $('.bg')[0].getContext('2d');
	$('#left').on('click', function (){
		if(xv != 1){
			xv = -1;
			yv = 0;
		}
		start = 1;
	});
	$('#up').on('click', function (){
		if(yv != 1){
			xv = 0;
			yv = -1;
		}
		start = 1;
	});
	$('#right').on('click', function() {
		if(xv != -1){
			xv = 1;
			yv = 0;
		}
		start = 1;
	});
	$('#down').on('click', function (){
		if(yv != -1){
			xv = 0;
			yv = 1;
		}
		start = 1;
	});
	$(document).on('keydown', function( event ){
		switch(event.which){
			case 37:
				if(xv == 1 && yv == 0){
					break;
				}
				xv=-1;
				yv=0;
				start = 1;
				break;
			case 38:
				if(xv == 0 && yv == 1){
					break;
				}
				xv=0;
				yv=-1;
				start = 1;
				break;
			case 39:
				if(xv == -1 && yv == 0){
					break;
				}
				xv=1;
				yv=0;
				start = 1;
				break;
			case 40:
				if(xv == 0 && yv == -1){
					break;
				}
				xv=0;
				yv=1;
				start = 1;
				break;
		}
	});
	setInterval(function(){
		px += xv;
		py += yv;
		if(px < 0){
			px = tc - 1;
		}
		if(px > tc - 1){
			px = 0;
		}
		if(py < 0){
			py = tc - 1;
		}
		if(py > tc - 1){
			py = 0;
		}
		
		ctx.fillStyle='black';
		ctx.fillRect(0, 0, canv.width(), canv.height());
		
		ctx.fillStyle='lime';
		
		for(var i = 0 ; i < trail.length; i++){
			//if(i == trail.length - 1){
				ctx.beginPath(); 
				ctx.arc(trail[i].x* gs + gs / 2, trail[i].y * gs + gs / 2, gs / 2, 0, 2 * Math.PI);
				if(i == 0){
					ctx.fillStyle='darkgreen';
				}
				else if (i == 1) {
					ctx.fillStyle='green';
				} 
				else ctx.fillStyle='lime';
				ctx.closePath(); 
				ctx.fill(); 
				//continue;
			//}
			//ctx.fillRect(trail[i].x* gs, trail[i].y * gs, gs - 2, gs - 2);
			if(trail[i].x == px && trail[i].y == py){
				tail = 5;
				score = 0;
				if(start)
				{
					alert('You Die!');
				}
			}
		}
		trail.push({x:px, y:py});
		while(trail.length > tail){
			trail.shift();
		}
		ctx.fillStyle='red';
		ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
		
		
		
		if(ax == px && ay == py){
			tail++;
			score += 20;
			var isOnsnake = true;
			while(isOnsnake){
				ax = Math.floor(Math.random() * tc);
				ay = Math.floor(Math.random() * tc);
				isOnsnake = false;
				for(var i = 0 ; i < trail.length ; i++){
					if(ax == trail[i].x && ay == trail[i].y){
						isOnsnake = true;
						break;
					}
 				}
			}
		}
		
		$('#scoreboard').text('Score: ' + score);
		if(score > highscore){
			$('#highscore').text('High Score: ' + score);
			highscore = score;
		}
		$('#snake-pos').text('Snake at ( ' + px + ' , ' + py + ' )');
		$('#score-pos').text('Point at ( ' + ax + ' , ' + ay + ' )');
		
	}, 1000/15);
});
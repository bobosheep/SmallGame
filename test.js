px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail=5;
highscore = 0;
$(document).ready(function(){
	canv = $('.bg');
	ctx = $('.bg')[0].getContext('2d');
	$(document).on('keydown', function( event ){
		switch(event.which){
			case 37:
				if(xv == 1 && yx == 0){
					break;
				}
				xv=-1;yv=0;
				break;
			case 38:
				if(xv == 0 && yx == 1){
					break;
				}
				xv=0;yv=-1;
				break;
			case 39:
				if(xv == -1 && yx == 0){
					break;
				}
				xv=1;yv=0;
				break;
			case 40:
				if(xv == 0 && yx == -1){
					break;
				}
				xv=0;yv=1;
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
				ctx.fillStyle='lime';
				ctx.closePath(); 
				ctx.fill(); 
				//continue;
			//}
			//ctx.fillRect(trail[i].x* gs, trail[i].y * gs, gs - 2, gs - 2);
			if(trail[i].x == px && trail[i].y == py){
				tail = 5;
				score = 0;
			}
		}
		
		ctx.fillStyle='red';
		ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
		
		trail.push({x:px, y:py});
		while(trail.length > tail){
			trail.shift();
		}
		
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
		
		$('#scoreboard').text('Your score is ' + score);
		if(score > highscore){
			$('#highscore').text('High Score ' + score);
			highscore = score;
		}
		
		
	}, 1000/15);
});
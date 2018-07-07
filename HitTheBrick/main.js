const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");
const status = {start: -1, playing: 0, gameover:1}


let centerX = canvas.width / 2, centerY = canvas.height / 2;   
let ballx = centerX, bally = centerY;
let  paddleWidth = 80, paddleHeight = 10,    
    paddlex = centerX - paddleWidth / 2, paddley = canvas.height - 20; 
let dx = 5, dy = 5, paddledx = 7;
let radius = 10;
let lpress = false, rpress = false, enterpress = false;
let bricksOffsetLeft = 20, bricksOffsetTop = 30, bircksPadding = 10;
let bricksWidth = 55, bricksHeight = 20;
let bricksRow = 3, bricksColumn = 7, totalBricks = bricksRow * bricksColumn;
let bricks = [];

let score = 0;
let game_status = -1;

(Init = () => {
    for(let i = 0 ; i < bricksRow ; i++){
        bricks[i] = []
        for(let j = 0 ; j < bricksColumn ; j++){
            bricks[i][j] = {x:0, y:0, status:1};
        }
    }
    paddlex = centerX - paddleWidth / 2;
    paddley = canvas.height - 20;
    ballx = centerX;
    bally = paddley - radius; 
    game_status = -1;
})();

kdown = (e) => {
    if (e.keyCode == 39)
        rpress = true;
    else if (e.keyCode == 37)
        lpress = true;
    else if (e.keyCode == 13)
        enterpress = true;
}

kup = (e) => {
    if (e.keyCode == 39)
        rpress = false;
    else if (e.keyCode == 37)
        lpress = false;
    else if (e.keyCode == 13)
        enterpress = false;
}

document.addEventListener("keydown", kdown, false);
document.addEventListener("keyup", kup, false);


DrawBall = () =>  {
    ctx.beginPath();
    ctx.arc(ballx, bally, radius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

DrawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddlex, paddley, paddleWidth, paddleHeight);
    ctx.fillStyle = "#2088DD";
    ctx.fill();
    ctx.closePath();
}

DrwBricks = () => {
    for(let i = 0 ; i < bricksRow ; i++){
        for(let j = 0 ; j < bricksColumn ; j++){
            if(bricks[i][j].status == 1){
                let brickx = j * (bricksWidth + bircksPadding ) + bricksOffsetLeft;
                let bricky = i * (bricksHeight + bircksPadding ) + bricksOffsetTop;
                bricks[i][j].x = brickx;
                bricks[i][j].y = bricky;
                ctx.beginPath();
                ctx.rect(brickx, bricky, bricksWidth, bricksHeight);
                ctx.fillStyle = "#2088DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

DrawScore = () => {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#050505";
    ctx.fillText("Score : " + score, centerX - 30, 16 );
}

CollisionDetect = () =>{
    for(let i = 0 ; i < bricksRow ; i++){
        for(let j = 0 ; j < bricksColumn ; j++){
            if(bricks[i][j].status == 1){
                let x = bricks[i][j].x, y = bricks[i][j].y;
                if(ballx + radius > x && ballx < x && bally <= y + bricksHeight && bally >= y    ||
                   ballx - radius < x + bricksWidth && ballx > x && bally < y + bricksHeight && bally >= y  ){
                   dx = -dx;
                   bricks[i][j].status = 0;
                   score += 1;
                }
                else if(bally + radius > y && bally < y && ballx >= x && ballx <= x + bricksWidth   ||
                        bally - radius < y + bricksHeight && bally > y && ballx >= x && ballx <= x + bricksWidth){
                    dy = -dy;
                    bricks[i][j].status = 0;
                    score += 1;
                }

            }
        }
    }
}

DrawGameOver = (stat)=>{
    ctx.beginPath();
    ctx.rect(centerX - 100, centerY - 40, 200, 100);
    if(stat){
        //Finish!!
        ctx.fillStyle = "#52f96e";
        ctx.fill();
        
        ctx.font = "20px Arial";
        ctx.fillStyle = "#050505";
        ctx.fillText("Congratulations !", centerX - 75,  centerY);

        ctx.closePath();
        ctx.beginPath();

        ctx.rect(centerX - 50, centerY + 20, 100, 30);
        ctx.fillStyle = "#ffff84"
        ctx.fill();
        
        ctx.font = "16px Arial";
        ctx.fillStyle = "#050505";
        ctx.fillText("Again", centerX - 18,  centerY + 40);
        
        ctx.closePath();
    }
    else{
        //Fail
        ctx.fillStyle = "#fc203e";
        ctx.fill();

        ctx.font = "20px Arial";
        ctx.fillStyle = "#050505";
        ctx.fillText("GameOver...", centerX - 60,  centerY);
        
        ctx.closePath();
        ctx.beginPath();

        ctx.rect(centerX - 50, centerY + 20, 100, 30);
        ctx.fillStyle = "#ffff84"
        ctx.fill();
        
        ctx.font = "16px Arial";
        ctx.fillStyle = "#050505";
        ctx.fillText("Retry", centerX - 18,  centerY + 40);

        ctx.closePath();
    }
}


Draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    DrawBall();
    DrawPaddle();
    DrwBricks();
    CollisionDetect();
    DrawScore();
    if(game_status == status.start && (lpress || rpress)){
        dx = rpress ? Math.abs(dx) : -Math.abs(dx);
        game_status = 0;
    }        
    if(lpress && paddlex > 0 && game_status == status.playing)  
        paddlex -= paddledx;
    if(rpress && paddlex + paddleWidth < canvas.width && game_status == status.playing) 
        paddlex += paddledx;
    if( ( ballx - radius < paddlex + paddleWidth && ballx > paddlex && bally >= paddley && bally <= paddley +  paddleHeight) ||
        ( ballx + radius > paddlex && ballx < paddlex && bally >= paddley && bally <= paddley +  paddleHeight) ||
        dx + ballx + radius > canvas.width || dx + ballx - radius < 0)
        dx = -dx;
    if((bally + radius > paddley && ballx >= paddlex && ballx <= paddlex + paddleWidth && bally < paddley)
        || dy + bally - radius < 0)
        dy = -dy;
    if(dy + bally + radius > canvas.height){
        DrawGameOver(0);
        game_status = 1;
    }
    if(score == totalBricks){
        DrawGameOver(1);
        game_status = 1;
    }

    if(game_status == status.gameover && enterpress){
        Init();
        score = 0;
        game_status = -1;
    }
    if(game_status == status.playing){
        ballx += dx;
        bally += dy;
    }

    requestAnimationFrame(Draw);
}
Draw();
const canvas = $('.game');
const ctx = canvas[0].getContext('2d');
const w = 30, h = 15;
function init(){
    ctx.fillStyle ='white';
    ctx.fillRect(0, 0, canvas.width(), canvas.height());
}

function drawRect(color, x, y){
    ctx.fillStyle = color;
    let rectangle = new Path2D();
    rectangle.rect(x - 2 * w, y - w, 2 * w + 1, 2 * w + 1   );
    ctx.fill(rectangle);
}

function drawCircle(color, x, y){
    ctx.fillStyle = color;
    let circle = new Path2D();
    circle.moveTo(x, y);
    circle.arc(x - w, y, w, 0, 2 * Math.PI);
    ctx.fill(circle);
}

function draw(){
    for(let x = 2 * w  + 25; x < 500 ; x += 2 * w + 5){
        for(let y = w + 25 ; y < 400 ; y += 2 * w + 5){
            drawRect('black', x, y);
            drawCircle('gray', x, y);
        }
    }
}
init();
draw();
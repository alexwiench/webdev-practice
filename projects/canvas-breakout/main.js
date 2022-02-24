let canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

//keystroke handler
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key == 'Right' || e.key == 'ArrowRight') {
		console.log('aaaaaaaaa');
		rightPressed = true;
	} else if (e.key == 'Left' || e.key == 'ArrowLeft') {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.key == 'Right' || e.key == 'ArrowRight') {
		rightPressed = false;
	} else if (e.key == 'Left' || e.key == 'ArrowLeft') {
		leftPressed = false;
	}
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = '#0095DD';
	ctx.fill();
	ctx.closePath();
}

function draw() {
	//clears prior frame
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draws ball
	drawBall();
	// updates position
	x += dx;
	y += dy;

	//wall collision
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}

	if (y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height - ballRadius - paddleHeight + 2) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy;
		} else if (y + dy > canvas.height + ballRadius) {
			alert('GAME OVER');
			document.location.reload();
			clearInterval(interval);
		}
	}

	//paddle movement
	if (rightPressed) {
		paddleX += 7;
		//wall collision
		if (paddleX + paddleWidth > canvas.width) {
			paddleX = canvas.width - paddleWidth;
		}
	} else if (leftPressed) {
		paddleX -= 7;
		//wall collision
		if (paddleX < 0) {
			paddleX = 0;
		}
	}

	drawPaddle();
}

let interval = setInterval(draw, 10);

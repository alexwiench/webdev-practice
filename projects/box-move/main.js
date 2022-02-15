let ball = document.getElementById("ball");

//set initial position
let x = ball.getBoundingClientRect().left;
let y = ball.getBoundingClientRect().top;

// ball.style.top = y;
// ball.style.left = x;

let up = () => {
  ball.style.top = `${y--}px`;
  console.log(`up ${y}`);
};

let down = () => {
  ball.style.top = `${y++}px`;
  console.log(`down ${y}`);
};

let right = () => {
  ball.style.left = `${x++}px`;
  console.log(`right ${x}`);
};

let left = () => {
  ball.style.left = `${x--}px`;
  console.log(`left ${x}`);
};

let moveBall = (e) => {
  let keyPress = e.key;
  switch (keyPress) {
    case "ArrowUp":
      up();
      break;
    case "ArrowDown":
      down();
      break;
    case "ArrowRight":
      right();
      break;
    case "ArrowLeft":
      left();
      break;
  }
};

document.addEventListener("keydown", moveBall);

let ball = document.getElementById("ball");

//set initial position by grabbing current location in window
let x = ball.getBoundingClientRect().left;
let y = ball.getBoundingClientRect().top;
let moveSpeed = 20;

let up = () => {
  y = y - moveSpeed;
  ball.style.top = `${y}px`;
  console.log(`up ${y}`);
};

let down = () => {
  y = y + moveSpeed;
  ball.style.top = `${y}px`;
  console.log(`down ${y}`);
};

let right = () => {
  x = x + moveSpeed;
  ball.style.left = `${x}px`;
  console.log(`right ${x}`);
};

let left = () => {
  x = x - moveSpeed;
  ball.style.left = `${x}px`;
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

// acceleration testing

const currentKeysPressed = {};

let onKeypress = (e) => {
  currentKeysPressed[e.repeats] = true;
  console.log("pressed");
};

let onKeyUp = (e) => {
  currentKeysPressed[e.key] = false;
};

document.addEventListener("keydown", onKeypress);
document.addEventListener("keyup", onKeyUp);

//reference https://stackoverflow.com/questions/56484999/running-code-repeatedly-while-key-pressed-in-javascript

const bufDiv = document.querySelector('.buffer');
let lines = bufDiv.textContent.split('\n');

// random 1 or -1
const STEP = Math.round(Math.random()) === 0 ? -1 : 1

const intervalID = window.setInterval(changeBufDiv, 100);

function changeBufDiv () {
  for (let i = 0; i < lines.length; i++) {
    lines[i] = rotate(lines[i], STEP);
  }
  bufDiv.textContent = lines.join('\n');
}

function rotate (str, n) {
  if (str === '') {
    return str;
  }
  n %= str.length
  if (n === 0) {
    return str;
  } else if (n < 0) {
    return str.substring(-n) + str.substring(0, -n);
  } else {
    return str.substring(str.length - n) + str.substring(0, str.length - n);
  }
}

document.addEventListener('keypress', (e) => {
  console.log(`key: '${e.key}' pressed, stop`)
  clearInterval(intervalID)
})

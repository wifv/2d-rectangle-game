const character = document.getElementById('character');
const characters = document.querySelectorAll('.animation')
let positionY = 0
let positionX = 0
let speed = 50
for(let i = 0; i < characters.length; i++) {
  characters[i].style.backgroundColor = `rgba(${77+i*6}, ${77+i*6}, ${77+i*6})`
  characters[characters.length-i-1].style.zIndex = i
}

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      positionY += speed
      break;

    case 'ArrowDown':
      positionY -= speed
      break;

    case 'ArrowRight':
      positionX += speed
      break;

    case 'ArrowLeft':
      positionX -= speed
      break;
  }
  updateCharacterPosition()
})

function updateCharacterPosition() {
  character.style.left = `${positionX}px`
  character.style.top = `${-positionY}px`
  for(let i = 0; i < characters.length; i++) {
    let pX = positionX
    let pY = positionY
    setTimeout(() => {
      characters[i].style.left = `${pX}px`
      characters[i].style.top = `${-pY}px`
    }, i * 20);
  }
  if(character.style.left.slice(0, -2) > window.innerWidth - 50) {
    positionX = 0
    updateCharacterPosition()
  }
  if(character.style.left.slice(0, -2) < 0) {
    positionX = window.innerWidth - 50
    updateCharacterPosition()
  }
  if(character.style.top.slice(0, -2) < 0) {
    positionY = (window.innerHeight - 50) * -1
    updateCharacterPosition()
  }
  if(character.style.top.slice(0, -2) > window.innerHeight - 50) {
    positionY = 0
    updateCharacterPosition()
  }

}

function triggerKey(element) {
  let event = new KeyboardEvent('keydown', {
    key: element,
    bubbles: true,
    cancelable: true
  });
  document.dispatchEvent(event)
}

document.getElementById('up').addEventListener('click', () => {triggerKey('ArrowUp')})
document.getElementById('right').addEventListener('click', () => {triggerKey('ArrowRight')})
document.getElementById('down').addEventListener('click', () => {triggerKey('ArrowDown')})
document.getElementById('left').addEventListener('click', () => {triggerKey('ArrowLeft')})
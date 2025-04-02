const mario = document.getElementById("mario")
const pipe = document.getElementById("pipe")
const audio = document.getElementById("go")
const over = document.getElementById("Over")
const reset = document.getElementById("reset")

function jump() {
  mario.classList.add("jump")
  setTimeout(() => {
    mario.classList.remove("jump")
    
  }, 500)
}
const loop = setInterval(() => {
  const pipePosition = +pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',' ');
  console.log(pipePosition)
  
  if(pipePosition <= 62 && marioPosition <= 40) {
    pipe.style.animation = 'none'
    pipe.style.left = 64 + 'px'
    mario.style.bottom = marioPosition + 'px'
    mario.style.animation = 'none';
    mario.src = "/game-over.png"
    mario.style.width = '34px'
    mario.style.marginLeft= '32px'
    go.play()
    reset.style.display = 'inline-block'
    over.style.display = 'block'
    
  }
  }, 10)
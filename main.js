const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.button');
const scoreElement = document.querySelector('.score');
const info = document.querySelector('.info');
const gameover = document.querySelector('.gameover');

let jogoIniciado = false;
let jogoEncerrado = false;

const start = () => {
    if (!jogoIniciado) {   
        pipe.classList.remove('stop')
        clouds.classList.remove('stop')
        mario.src = './assets/img/mario.gif';
        jogoIniciado = true;
    }
}

const jump = () => {
    if (!jogoEncerrado) { 
    mario.classList.add('jump');
    info.classList.add('hidden');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500); }
}
let pontuação = 0 

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPotition = clouds.offsetLeft;
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './assets/img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPotition}px`;
        
        button.classList.remove('hidden');
        gameover.classList.remove('hidden');
                
        jogoEncerrado = true;
        clearInterval(loop);
    } else if (pipePosition <= 0) {
        pontuação++;
        scoreElement.textContent = `Pontuação: ${pontuação}`;
      }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('keydown', start);


document.addEventListener('touchstart', jump);
document.addEventListener('touchstart', start);

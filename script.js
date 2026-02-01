// Minimal interactivity: dog follows mouse, No dodges, Yes shows overlay with hearts
document.addEventListener('mousemove', e => {
  const dog = document.getElementById('dog');
  const stage = document.getElementById('stage');
  if (!dog || !stage) return;
  const rect = stage.getBoundingClientRect();
  // subtle follow: move relative to center and scale down
  const x = (e.clientX - rect.left - rect.width/2) / 20;
  const y = (e.clientY - rect.top - rect.height/2) / 20;
  dog.style.setProperty('--dx', `${x}px`);
  dog.style.setProperty('--dy', `${y}px`);
});

const yes = document.getElementById('yes');
const no = document.getElementById('no');
const overlay = document.getElementById('overlay');
const hearts = document.getElementById('hearts');
const restart = document.getElementById('restart');

if(yes){
  yes.addEventListener('click', () => {
    overlay.hidden = false;
    showHearts();
  });
}

if(no){
  no.addEventListener('mouseenter', () => {
    const area = no.parentElement.getBoundingClientRect();
    const max = Math.max(0, area.width - no.offsetWidth);
    no.style.position = 'relative';
    no.style.left = Math.floor(Math.random() * max) + 'px';
    no.style.top = Math.floor(Math.random()* max) + 'px';
  });
}

if(restart){
  restart.addEventListener('click', () => {
    overlay.hidden = true;
    hearts.innerHTML = '';
  });
}

function showHearts(){
  const count = 12;
  for(let i=0;i<count;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = '❤️';
    h.style.left = Math.random()*100 + '%';
    h.style.top = 60 + Math.random()*30 + '%';
    h.style.fontSize = 18 + Math.random()*28 + 'px';
    hearts.appendChild(h);
  }
  setTimeout(()=>{hearts.innerHTML='';}, 3000);
}
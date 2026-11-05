function sprinkle(){
 const layer=document.querySelector('.petals');if(!layer)return;layer.innerHTML='';
 for(let n=0;n<38;n++){const p=document.createElement('i');p.style.setProperty('--left',Math.random()*100+'%');p.style.setProperty('--duration',(5+Math.random()*6)+'s');p.style.animationDelay=(Math.random()*2)+'s';layer.appendChild(p);}
 setTimeout(()=>layer.innerHTML='',13000);
}
document.addEventListener('DOMContentLoaded',()=>{if(document.body.classList.contains('final-page'))sprinkle();const btn=document.getElementById('celebrate');if(btn)btn.addEventListener('click',sprinkle);});
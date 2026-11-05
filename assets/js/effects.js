// Extra falling party confetti on the final reveal and when the button is clicked.
function launchConfetti(){
 const layer=document.getElementById('confetti'); if(!layer)return;
 layer.innerHTML='';
 const colors=['#ffd36f','#ff6fa9','#a98bff','#ffffff','#79e3cf','#ff9b69'];
 for(let i=0;i<125;i++){
   const bit=document.createElement('span');
   bit.style.cssText=`position:absolute;left:${Math.random()*100}%;top:-18px;width:${5+Math.random()*7}px;height:${8+Math.random()*12}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>.5?'50%':'2px'};opacity:.95;transform:rotate(${Math.random()*360}deg);animation:confettiFall ${3+Math.random()*4}s ${Math.random()*1.5}s linear forwards;`;
   layer.appendChild(bit);
 }
 setTimeout(()=>{layer.innerHTML=''},8500);
}
const style=document.createElement('style');
style.textContent='@keyframes confettiFall{to{transform:translate3d(var(--drift,30px),110vh,0) rotate(900deg);opacity:.2}}';
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded',()=>{
 if(document.body.classList.contains('final-page'))launchConfetti();
 const btn=document.getElementById('celebrate'); if(btn)btn.addEventListener('click',launchConfetti);
 // Add gentle 3D tilt to hero / final panels on pointer devices.
 document.querySelectorAll('.tilt-card,.final-glass').forEach(card=>{
  card.addEventListener('mousemove',e=>{
   if(window.innerWidth<768)return;
   const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   card.style.transform=`perspective(1100px) rotateX(${-y*4}deg) rotateY(${x*4}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
 });
});

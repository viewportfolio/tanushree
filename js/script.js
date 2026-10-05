// Mobile menu
const menu=document.getElementById('menu'),burger=document.getElementById('burger');
burger.addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('yr').textContent=new Date().getFullYear();

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.card,.item,.contact').forEach(el=>{el.classList.add('reveal');io.observe(el)});

// Count-up stats
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;
  const el=e.target,end=+el.dataset.count;let n=0;
  const t=setInterval(()=>{n++;el.textContent=n;if(n>=end)clearInterval(t)},Math.max(25,1200/end));
  co.unobserve(el);
}),{threshold:.6});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

// 3D tilt on the hero diagram
const hv=document.getElementById('heroVisual'),eco=document.getElementById('eco');
if(window.matchMedia('(hover:hover)').matches){
  hv.addEventListener('mousemove',e=>{const r=hv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    eco.style.transform=`rotateY(${-10+x*14}deg) rotateX(${5-y*12}deg)`});
  hv.addEventListener('mouseleave',()=>eco.style.transform='');
}

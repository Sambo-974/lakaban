const btns=document.querySelectorAll('.btn-modale');const modaleRepas=document.querySelector('.bloc-modale');const fermetureModale=document.querySelector('.fermeture-modale');const imgIndex=document.querySelector('.bloc-modale img');if(window.matchMedia("(min-width: 850px)").matches){btns.forEach(btn=>{btn.addEventListener('click',(e)=>{imgIndex.src=`img/img${e.target.getAttribute('data-index')}.jpg`;modaleRepas.classList.add('active-modale')})})
modaleRepas.addEventListener('click',()=>{modaleRepas.classList.remove('active-modale')})}
const nav=document.querySelector('nav');window.addEventListener('scroll',()=>{if(window.scrollY>30){nav.classList.add('anim-nav')}else{nav.classList.remove('anim-nav')}})
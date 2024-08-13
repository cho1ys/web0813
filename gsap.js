const box = document.querySelector('.box');
const animate = document.querySelector('.animation')
const title = document.querySelector('.title')
const character = document.querySelector('.character')
function moveBox() {
    gsap.to(box, 1, {left : '1000px'})
    gsap.to(title,1,{opacity : 1})
    gsap.fromTo(character,{x:700,y:70,opacity:0},{x:400,y:200,duration:2,opacity:1})
}
animate.addEventListener('click',moveBox)
gsap.set(title, {opacity : 0})
gsap.to('.target h1', {
    scrollTrigger:{
        trigger : '.target',
        start:'0% 0%',
        end:'100% 10%',
        markers:true,
        scrub:1,
    },
    scale : 2,
    rotation : 180
})

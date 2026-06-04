const div=document.querySelector('.main')
const text=document.querySelector('h1')
console.log(text)

function shadow(e){
  const {offsetWidth:width,offsetHeight:height}=this
  let {offsetX: x,offsetY:y}=e
  const walk=300

  if(this !==e.target){
   x = x + e.target.offsetLeft
   y = y + e.target.offsetTop
  }
  const xwidth=Math.round((x/width*walk)-(walk/2))
  const ywidth=Math.round((y/height*walk)-(walk/2))
  console.log(xwidth,ywidth)
  
  text.style.textShadow=`${xwidth}px ${ywidth}px 0 rgba(255,0,255,0.7),
                         ${xwidth * -1}px ${ywidth}px 0 rgba(255, 140, 142, 0.87),
                         ${xwidth}px ${ywidth * -1}px 0 rgba(0,255,0,0.7),
                         ${xwidth * -1}px ${ywidth*-1}px 0 rgb(0, 231, 235)`
  

}
div.addEventListener('mousemove',shadow)
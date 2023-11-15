const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let timeout ;

function circlesqish(){
    let Xscale = 1;
    let Yscale = 1;
    let Xprev = 0;
    let Yprev = 0;
    window.addEventListener("mousemove" ,  function(dets){

        clearTimeout(timeout)   // clear timout clear the the time out function
        let  xdiff =  dets.clientX - Xprev;
        let ydiff = dets.clientY  - Yprev;
        Xprev = dets.clientX;
        Yprev = dets.clientY;
        Xscale = gsap.utils.clamp(.8 , 1.2, xdiff)          //using gsap utils documentation in which we have clamp() fucntion 
        Yscale = gsap.utils.clamp(.8 , 1.2 , ydiff)

        circlemousefolower(Xscale  , Yscale)

        timeout = setTimeout(function(){
            document.querySelectorAll("#minicircle").style.transform = `translate(${dets.clientX} px , ${dets.clientY}  scale(0 , 0))`
           } , 2000 )
    })
}
circlesqish();


function circlemousefolower(Xscale ,  Yscale){
    
    window.addEventListener("mousemove" , function(dets){
       document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${Xscale} , ${Yscale})`;

      

    })
}
circlemousefolower()

function firstpageanimation(){
    var t1 = gsap.timeline()

    t1.from('#nav', {
        y:'-10',
        opacity: 0,
        duration: 1.5, 
        ease: Expo.easeInOut

    })
       .to('.boundingelem', {
        y:'0',
        duration: 2, 
        delay : -1,
        ease: Expo.easeInOut,
        stagger:.2

       })
       .from('#footer', {
        y:'-10',
        opacity: 0,
        duration: 2, 
        delay: -1,

        ease: Expo.easeInOut

    })

}
firstpageanimation()

document.querySelectorAll(".elem")
.forEach(function(elem){
    let diff2 = 0;
    let rotate = 0;

    elem.addEventListener("mouseleave" , function(dets){
        
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,     // power 3 brings the smoothnes
            duration : 0.5,
        })

    })


  
    elem.addEventListener("mousemove" , function(dets){
        let diff = dets.clientY - elem.getBoundingClientRect().top
        diff2 = dets.clientX - rotate;
        rotate  = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,      // power 3 brings the smoothnes
            top : diff,
            left : dets.clientX,
            rotate :gsap.utils.clamp(-20 ,20 ,diff2*0.5),  // diff*0.5 decresae the amplitude
        })

    })
})


// getBoundingClientRect is method where you can find the property of that element for example the the distance of that div from the top




function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveScroll()
function loadingAnimation(){ 
let tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.5,
    duration:0.6,
    delay:0.5 
})

tl.from("#line-part1, .line h2",{
    opacity:0,
    onStart:function(){
        let h5timer = document.querySelector("#line-part1 h5");
        let grow=0
        setInterval(function(){
            if(grow<100){        
                h5timer.innerHTML=grow++
            }else{
                h5timer.innerHTML=grow
            }
        },45)
    }
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3.5,
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    duration:0.5,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})

tl.from("#hero h1,#hero h2",{
    y:140,
    stagger:0.2
})
tl.from("#nav",{
    opacity:0
})
// tl.from("#hero1 , #page2",{
//     opacity:0
// },"-=1.2")

}

loadingAnimation()

function cursorAnimation(){
    // document.addEventListener("mousemove",function(dets){
    //    gsap.to("#crsr",{
    //     left:dets.x,
    //     top:dets.y
    //    })
    // })

    Shery.makeMagnet("#nav-part2 h4" );
    let videoContainer = document.querySelector("#video-container");
    let video = document.querySelector("#video-container video");
    let videoImg = document.querySelector("#video-container img");
    document.querySelector("#video-container").addEventListener("mouseenter",function(){
        document.querySelector("#video-container").addEventListener("mousemove",function(dets){
            gsap.to("#crsr",{
                opacity:0
            })
            gsap.to("#video-cursor",{
                left:dets.x - 550,
                y:dets.y -300
            })

        })
    })
    videoContainer.addEventListener("click",function(){
        videoImg.style.opacity=0;
        video.play();
        video.style.opacity=1;
    })
    // document.querySelector("#video-container").addEventListener("mouseenter",function(){
    // })
    document.querySelector("#video-container").addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            opacity:1
        })
        gsap.to("#video-cursor",{
            // opacity:1
            left:"70%",
            top:"-15%"
        })

        gsap.to("#video-cursor",{
            scale:0.5
        })
        // gsap.to("#video-cursor",{
        //     left:dets.x - 550,
        //     y:dets.y -300
        // })

    })
}
cursorAnimation()

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666584303074322},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.73,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
        gooey:true
    })
}
sheryAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})
let footerElement =document.querySelector("#footer h1");
footerElement.addEventListener("mouseover",function(){
  gsap.from("#footer h1",{
    
    onStart:function(){
        $('#footer h1').textillate({ in: { effect: 'fadeIn' },outEffects: [ 'hinge' ], });
    }
  })
    
})

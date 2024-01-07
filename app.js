// CursorAnimation.js
import gsap from "gsap";
import SplitType from 'split-type'


const animateCursor = () => {
    const text = new SplitType('#cursor-id')
    let cursor = document.querySelector(".cursor"),
    cursorText = cursor.querySelectorAll(".char");
    let radius = 70;
    
    
    function init() {
        rounded(radius);
        window.addEventListener("mousemove", cursorMove)
    }
    window.addEventListener("load", function(){
        init()
    })
    
    function rounded(radius) {
    for (let i = 0; i < cursorText.length; i++) {
      let rotation = i * (360 / cursorText.length);
      gsap.set(cursorText[i], {
        transformOrigin: `0px ${radius}px`,
        x: radius,
        rotate: rotation,
      });
      gsap.set(cursor, {
        transformOrigin: "center center",
        rotation: 0,
        width: radius * 2,
        height: radius * 2,
    });
}
    
    let rotate = gsap.timeline({ repeat: -1 });
    rotate.to(cursor, { rotation: 360, duration: 6, ease: "none" });
  }

  window.addEventListener("load", function () {
    init();
  });

  function cursorMove(e ) {
    let moveX = e.clientX;
    let moveY = e.clientY;
  const  t1 = gsap.timeline();
    t1.to(cursor,{
    duration: 1,
    x:moveX -100,
    y:moveY -200,
    ease:"ease"
})
  }
  

};

export default animateCursor;

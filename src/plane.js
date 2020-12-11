import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import plain from './images/plane.gif'

function Plane() {


  //hook for plane
  var { ref, playState1, getAnimation1 } = useWebAnimations({// ref here is used as reference hook and playstate tells the condition of animation(runnig or not runnig) and getanimation will be used to control animation on events or mouse clicks etc.
    keyframes: [
      { transform: 'translate(0px, 0px)' },
      { transform: 'translate(200px, 0px)' },
      { transform: 'translate(300px, 80px)' },
      { transform: 'translate(400px, 160px)' },
      { transform: 'translate(600px, 160px)' }
    ],
    timing: {
      delay: 1500, // Start with a 500ms delay
      duration: 6000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      //direction: "alternate", // Run the animation forwards and then backwards
      //easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <div>
      <div ref={ref}>
        <img src={plain} alt="palne" />
      </div>

    </div>
  );
}

export default Plane;

import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import clouds from './images/clouds.gif'
import Plane from './plane.js'

function App() {
  //hook for clouds
  var { ref, playState, getAnimation } = useWebAnimations({// ref here is used as reference hook and playstate tells the condition of animation(runnig or not runnig) and getanimation will be used to control animation on events or mouse clicks etc.
    keyframes: [
      { transform: 'translateX(100%' },
      { transform: 'translateX(-100%' }
    ],
    timing: {
      //delay: 1500, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      //direction: "alternate", // Run the animation forwards and then backwards
      //easing: "ease-in-out", // Use a fancy timing function
    },
  });


  return (
    <div>

      <div ref={ref}>
        <img src={clouds} alt="clouds" className="cloud1" />
        <img src={clouds} alt="clouds" className="cloud2" />
      </div>

      <Plane />

      <div className="runway"></div>


    </div>
  );
}

export default App;

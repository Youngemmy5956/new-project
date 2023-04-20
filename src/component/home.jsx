// import React, { useState } from 'react'
// import './home.css'

// export default function Home() {
//   const [counter, setCounter] = useState(0);


//   // increase counter

//   const increase = () => {
//     setCounter(count => count +1);
//   }


//   // decrease counter

//   const decrease = () => {
//     if(counter > 0)
//     setCounter ((count) => count -1);
//   }

//   // reset counter

//   const reset = () => {
//     setCounter (0);
//   }

//   console.log(counter);
//   return (
//     <div>
//         <h1>React counter</h1>
//         <h3>{counter}</h3>
//         <span>
//           <button onClick={increase} class="btn">+</button>
//           <button onClick={decrease} class="btn">-</button>
//           <button onClick={reset} class="btn">Reset</button>
//         </span>
//     </div>
//   )
// }


import React from "react";
import About from './about';


export default function Home(props) {
  // const name = "emmy"
  return (

    <>
    <div>
      {/* <About name={name} /> */}
      <p>The name of the user that logged in is: {props.name} </p>
      {/* <Login The name of the user that logged in is {name} /> */}
    </div>

    </>
  );
}

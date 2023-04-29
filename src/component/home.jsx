// import React, { useState } from 'react'
// import FirstChild from "./FirstChild";
// import SecondChild from "./SecondChild";
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
//         <FirstChild counter = {counter}/>
//         <SecondChild name = {counter}/>
        
//     </div>
//   )
// }


// import React from "react";
// import About from './about';


// export default function Home(props) {
//   const name = "emmy"
//   return (

//     <>
//     <div>
//       <About name={name} />
//       <p>The name of the user that logged in is: {props.name} </p>
//       <Login The name of the user that logged in is {name} />
//     </div>

//     </>
//   );
// }


// import React from 'react'
// import './home.css'
// import { useState } from 'react';
// import Child from './Child';

// export default function Home() {
//   const [FirstName, setFirstName] = useState("");
//   const [LastName, setLastName] = useState("");  

//   const OnChangeFirstName = (event) => {
//     setFirstName(event.target.value)
//   };

//   const OnChangeLastName = (event) => {
//     setLastName(event.target.value)
//   };


//   const onSubmit = (event) => {
//     if(FirstName != '' && LastName != '') {
//       alert('successful')
//     }
//   }

//   console.log(FirstName, 'firstName', LastName, 'lastName')



//   return (
//     <div className='formDiv'>
//       <form onSubmit={onSubmit}>
//         <input type="text" placeholder='FirstName'id='first name' onChange={OnChangeFirstName}/>
//         <input type="text" placeholder='LastName' id='last name' onChange={OnChangeLastName}/>

//         <button>Submit</button>
//       </form>




//       <Child firstName={FirstName} lastName={LastName} />
//     </div>
//   )
// }



import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div> 
           <p>This is the homepage</p>
           <p>Click on this to enter About page</p>
           <a href="/about">About</a>


           <p>Click on this to enter Contact page</p>
           <a href="/contact">Contact</a>


           <p>Click on this to enter Service page</p>
           <a href="/service">Service</a>


           <p>Click on this to enter Home page</p>
           <a href="/Home">Home</a>


           <p onClick={() => navigate('/service')}>Click on this to enter about page </p>

           <button onClick={() => navigate('/contact')}>Submit</button>



           

    </div>
  )
}





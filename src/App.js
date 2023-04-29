// import ClassComponent from './component/ClassComponent'
// import Home from "./component/home"
// import About from "./component/about"
// import Login from "./component/login";


// function App() {
  // const letter ='Hello'
  // console.log(letter);



  // return (
    // <div>
    //   <Home />
      /* <ClassComponent /> */
/* 
      {<About name= 'Emmy' />} */
      /* <Login /> */
      
      
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'
import Text from './component/Text';
import Button from './component/Button';

function App() {
  return(
    <div>

      <Text />
      <Button />
      

    <BrowserRouter>

    <Routes>


    
    <Route path="/" element = {<Home/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/contact" element = {<Contact/>} />
    <Route path="/service" element = {<Service/>} />

    </Routes>
    
    </BrowserRouter>
    </div>
  );
}


export default App;





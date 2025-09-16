// import logo from './logo.svg';
// import './App.css';
// import { Navbar} from './routing/Navbar';
// import { Route, Routes } from 'react-router-dom'; 
// import Home from './routing/Home';
// import About from './routing/About';
// import Nomatch from './routing/Nomatch';
// import BlogPost from './routing/BlogPost';
// // import { LocationDisplay } from './routing/LocationDisplay'; 

// import React from 'react';
// import { ComponentC } from './Hooks/ComponentC';

// export const UserContext=React.createContext()
// export const AddressContext=React.createContext()


// function App() {
//   return (
//     <div className="App">
//       <hr/>
//       <h2>--------------------
//         output of useContext Hooks
//         --------------------</h2>
//       <UserContext.Provider value={"Aditya"}>
//         <AddressContext.Provider value={"Junnar"}>
//           <ComponentC/>
//         </AddressContext.Provider>
//       </UserContext.Provider>
//       <hr/>
//       <h1>- -------------------</h1>
//       <h2>React Routing</h2>
//       <h1>--------------------</h1>
//       <Navbar/>
//       {/* <LocationDisplay/><br/> */}
//       {/* <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/about' element={<About/>}></Route>
//         <Route path='*' element={<Nomatch/>}></Route>
//         </Routes><br/> */}

        
//         {/* <hr></hr>
//         <h1>Specifing and Reading Dynamic Paramenter Using useParams </h1>
//         <hr></hr>
//         <Routes>
//           <Route path="/page/:id" element={<BlogPost/>}/>
//           <Route path="/" element={<Home/>}/>
//           <Route path='about' element={<About/>}></Route>
//           </Routes>
//           <hr></hr> */}

//         <Navbar/>

     
//     </div>
//   );
// }



import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Homee from "./routing/Homee";
// import Login from "./routing/Login";
// import Dashboard from "./routing/Dashboard";
// import RecipeBook from "./routing/RecipeBook";
import Home1 from "./Newproject/Home1";


import "./App.css";
import About from "./Newproject/About";
import Contact from "./Newproject/Contact";
// import AboutMe from "./routing/AboutMe";


// import Movie from "./Movie";
 
function App() {
  return (
    <div>
      <h1> My First Project !</h1>

      {/* <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Dashboard />} />
      </Routes> */}

      {/* <RecipeBook></RecipeBook> */}
      {/* <Movie></Movie> */}
      {/* <AboutMe></AboutMe> */}
      <Home1></Home1>
      <About></About>
      <Contact></Contact>
      
      
    </div>
  );
}   
export default App;
import React from 'react'
import {Routes,Route} from 'react-router-dom';
import About from './About'
import Contact from './Contact';
import Home from './Home';


function App() {
  return (
    <>
    <Routes>  
      <Route path='/' element={<Home/>}></Route>
    
      <Route path='/about' element={<About/>}></Route>
      
    
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
 </>
  )
}

export default App

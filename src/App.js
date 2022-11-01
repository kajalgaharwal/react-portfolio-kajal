import React from 'react';
import './index.css';
import About from './Rroutes/About';
import Contact from './Rroutes/Contact';
import Home from './Rroutes/Home';
import Project from './Rroutes/Project';
import { Route, Routes } from 'react-router-dom';
import Services from './Rroutes/Services';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

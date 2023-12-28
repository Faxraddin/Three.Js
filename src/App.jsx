import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MainRoot from './root/MainRoot';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Projects from '../src/pages/Projects';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainRoot/>}>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>

      </Route>
    </Routes>
  )
}

export default App

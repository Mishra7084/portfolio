import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import About from './components/About/About';
import Contact from './components/Contact/contactPage';
import Hero from './components/Home/Hero';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
);

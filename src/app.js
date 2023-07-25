// import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/';
import About from './components/About/';
import Resume from './components/Resume/';
import Header from './components/Header';
import Home from './components/Home/';
import Nav from './components/Nav/index';
import Projects from './components/Projects/';
import Footer from './components/Footer/index'

import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
    return (
        <div>
                <Router>
                <Header/>    
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}/>
                    <Route
                        path="/about"
                        element={<About />}/>
                    <Route
                        path="/projects"
                        element={<Projects />}/>
                    <Route
                        path="/contact"
                        element={<Contact />}/>
                    <Route
                        path="/resume"
                        element={<Resume />}/>
                </Routes>
                <Footer />
                </Router>
                </div>
    );
};
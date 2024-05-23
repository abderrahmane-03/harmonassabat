import './App.css';
import {Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home.jsx";
import NavBar from "./Components/NavBar.jsx";
import QuiSommesNous from "./Components/QuiSommesNous.jsx";
import Blog from "./Components/Blog.jsx";
import Faq from "./Components/Faq.jsx";
import Compare from "./Components/Compare.jsx";
import Footer from "./Components/Footer.jsx";
import Team from "./Components/Team.jsx";
function App() {
    return (
            <div>


                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="NavBar" element={<NavBar/>}/>
                    <Route path="QuiSommesNous" element={<QuiSommesNous/>}/>
                    <Route path="Blog" element={<Blog/>}/>
                    <Route path="Faq" element={<Faq/>}/>
                    <Route path="Compare" element={<Compare/>}/>
                    <Route path="Footer" element={<Footer/>}/>
                    <Route path="Team" element={<Team/>}/>
                </Routes>
            </div>
    );
}

export default App;

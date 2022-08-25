import React from "react";
import "./App.css";

import Navbar from "./components/navigation/Navbar";
import Home from "./components/navigation/Home";
import Skills from "./components/navigation/Skills";
import Projects from "./components/navigation/Projects";
import Contacts from "./components/navigation/Contacts";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

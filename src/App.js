import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Abouts from "./pages/abouts/Abouts";
import Contacts from "./pages/contacts/Contacts";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

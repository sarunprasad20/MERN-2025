import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Hook from "./components/Hook";
import State from "./Hooks/State";
import Ref from "./Hooks/Ref";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  var fruit = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home items={fruit} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/state" element={<State />} />
          <Route path="/ref" element={<Ref />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
import React from "react";
import "./App.css";
import useScrollAnimation from './hooks/useScrollAnimation';

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";

const App = () => {
  useScrollAnimation();
  
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <main className="main-content">
        <Brand className="fade-in-bottom" />
        <WhatGPT3 className="fade-in-left" />
        <Features className="fade-in-right" />
        <Possibility className="scale-in" />
        <CTA className="fade-in-bottom" />
        <Blog className="rotate-in" />
        <Footer className="fade-in-bottom" />
      </main>
    </div>
  );
};

export default App;

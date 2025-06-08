import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Head from "./components/Head";
import Body1 from "./components/Body1";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Skills from "./components/Skills";
import About from "./components/About";
import Getin from "./components/Getin";
import View from "./components/View";
import Footer from "./components/Foter";

const Home = () => (
  <>
    <Head />
    <Body1 />
    <Body2 />
    <Body3 />
    <Footer />
  </>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<View />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Getin />} />
      </Routes>
    </Router>
  </StrictMode>
);

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Footer from "./components/Footer/Footer";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/artist"} element={<Artist />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// TODO
// - Revoir le react-router
// - Organiser le :root (font, transition, color...)
// - Revoir les buttons
// - Revoir les titres (H1, H2, H3...)
// - Inserer les images bg

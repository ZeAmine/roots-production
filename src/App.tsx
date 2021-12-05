import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cookies_Politics from "./components/Cookies_Politics/Cookies_Politics";
import Legal_Mention from "./components/Legal_Mention/Legal_Mention";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Artiste" element={<Artist />} />
        <Route path="/Politique" element={<Cookies_Politics />} />
        <Route path="/Mention-legal" element={<Legal_Mention />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// TODO
// - Revoir le react-router
// - Revoir les titres (H1, H2, H3...)

// clique sur ce connecter => route vers ovh => une fois connecter renver ver le back puis ver le front => obtention du token => utilisation du site (save, like...)
// fetch pour tout features

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

import Cards from "./Cards.tsx";
import NotFoundError from "./NotFoundError.tsx";
import About from "./About.tsx";
import Kasa from "./Kasa.tsx";





createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/*" element={<NotFoundError />} />
            <Route path="/a-propos/" element={<About />} />
            <Route path="/:id" element={<Kasa />} />
          </Routes>
        </main>
      <Footer />
    </Router>
  </StrictMode>
);

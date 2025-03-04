import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.scss";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

import Cards from "./pages/Cards.tsx";
import NotFoundError from "./pages/NotFoundError.tsx";
import About from "./pages/About.tsx";
import Kasa from "./pages/Kasa.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <div className="content-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/a-propos/" element={<About />} />
            <Route path="/:id" element={<Kasa />} />
            <Route path="/404" element={<NotFoundError />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  </StrictMode>
);

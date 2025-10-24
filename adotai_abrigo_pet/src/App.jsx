import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PetForm from "./pages/PetForm";
import AdopterForm from "./pages/AdopterForm";
import AdoptionHistory from "./pages/AdoptionHistory";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          {/* Rotas para as 3 páginas */}
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar-pet" element={<PetForm />} />
          <Route path="/cadastrar-adotante" element={<AdopterForm />} />
          <Route path="/historico" element={<AdoptionHistory />} />
          <Route path="/pets" element={<></>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

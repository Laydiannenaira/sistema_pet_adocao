import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PetForm from "./pages/PetForm";
import AdopterForm from "./pages/AdopterForm";
import AdoptionHistory from "./pages/AdoptionHistory";
import PetList from "./pages/PetList";

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
            <Route path="/pets" element={<PetList />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;

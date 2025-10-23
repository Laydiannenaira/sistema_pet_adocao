import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PetForm from "./pages/PetForm";
import AdopterForm from "./pages/AdopterForm";
import AdoptionHistory from "./pages/AdoptionHistory";
import PetList from "./pages/PetList";
import { allPetsData } from "./data/petsData";
import { allAdoptersData } from "./data/adoptersData";
import { allAdoptionsData } from "./data/adoptionsData";

function App() {
  const [pets, setPets] = useState(allPetsData);
  const [adopters, setAdopters] = useState(allAdoptersData);
  const [adoptions, setAdoptions] = useState(allAdoptionsData);
  const navigate = useNavigate();

  // Adiciona novo Pet
  const handleAddPet = (petDataFromForm) => {
    const newPet = {
      id: Date.now(),
      ...petDataFromForm,
      status: 'disponível',
      imgUrl: petDataFromForm.especie === 'gato' ? 'https://placekitten.com/300/304' : 'https://place.dog/300/304'
    };
    
    setPets(currentPets => [newPet, ...currentPets]);
    
    alert('Pet cadastrado com sucesso!');
    navigate('/pets'); // Leva até a lista de pets
  };

  // Adiciona novo Adotante
  const handleAddAdopter = (adopterDataFromForm) => {
    const newAdopter = {
      id: Date.now() + 1,
      ...adopterDataFromForm,
    };

    setAdopters(currentAdopters => [newAdopter, ...currentAdopters]);

    alert('Adotante cadastrado com sucesso!');
    navigate('/pets');
  };

  // Adota um Pet
  const handleAdopt = (petToAdopt) => {
    const adopterName = prompt(
      `Você está adotando ${petToAdopt.nome}!\nPor favor, digite seu nome:`,
      "Usuário Demo"
    );

    if (adopterName) {
      // Muda status do pet
      setPets(currentPets =>
        currentPets.map(pet =>
          pet.id === petToAdopt.id ? { ...pet, status: 'adotado' } : pet
        )
      );

      // Cria novo adotante
      const newAdopter = { id: Date.now() + 2, nome: adopterName };
      // Salva novo adotante no 'adopters'
      setAdopters(current => [...current, newAdopter]);
      
      // Cria registro de adoção
      const newAdoption = {
        id: Date.now() + 3,
        data_adocao: new Date().toISOString().split('T')[0],
        pet: { ...petToAdopt, status: 'adotado' },
        adotante: newAdopter,
      };

      // Salva adoção
      setAdoptions(currentAdoptions => [newAdoption, ...currentAdoptions]);

      alert(`Parabéns! ${petToAdopt.nome} foi adotado!`);
    }
  };

  const availablePets = pets.filter(pet => pet.status === 'disponível');
  const adoptedPetsHistory = adoptions;

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          {/* A Rota Home ainda está vazia */}
          <Route path="/" element={<></>} />
          
          <Route 
            path="/pets" 
            element={<PetList 
              availablePets={availablePets} 
              onAdopt={handleAdopt} 
            />} 
          />
          
          <Route 
            path="/historico" 
            element={<AdoptionHistory adoptions={adoptedPetsHistory} />} 
          />
          
          <Route 
            path="/cadastrar-pet" 
            element={<PetForm onAddPet={handleAddPet} />} 
          />
          
          <Route 
            path="/cadastrar-adotante" 
            element={<AdopterForm onAddAdopter={handleAddAdopter} />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import styles from './PetForm.module.css';

const PetForm = () => {
  const [name, setName] = useState('');
  // Simplificado para 'cachorro' ou 'gato'
  const [species, setSpecies] = useState('cachorro'); 
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('available');

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   const petData = { nome, especie, dataNascimento, descricao, status };
  //   console.log('Dados do Pet para enviar:', petData);
    
  //   // TODO: Enviar 'petData' para o Backend
    
  //   alert('Pet cadastrado (simulação)!');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const petData = { name, species, age, description, status };
    try {
      await fetch('http://localhost:3000/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(petData)
      });
      alert('Pet cadastrado!');
      setName(""); setSpecies("cachorro"); setAge(""); setDescription(""); setStatus("available");
    } catch (err) {
      alert("Erro ao cadastrar pet!");
    }
  };


  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Cadastro de Pet</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Campo: Nome */}
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome do Pet</label>
          <input
            type="text"
            id="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Campo: Espécie (ATUALIZADO) */}
        <div className={styles.formGroup}>
          <label htmlFor="especie">Espécie</label>
          <select
            id="especie"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          >
            {/* Opções agora restritas a cachorro e gato */}
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
        </div>

        {/* Campo: Idade */}
        <div className={styles.formGroup}>
          <label htmlFor="idade">Idade (Aprox.)</label>
          <input
            type="number"
            id="idade"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            required
          />
        </div>

        {/* Campo: Descrição */}
        <div className={styles.formGroup}>
          <label htmlFor="descricao">Descrição (Personalidade, etc.)</label>
          <textarea
            id="descricao"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        {/* Campo: Status */}
        <div className={styles.formGroup}>
          <label htmlFor="status">Status Inicial</label>
          <select 
            id="status" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="available">Disponível</option>
            <option value="adopted">Adotado</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Cadastrar Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;
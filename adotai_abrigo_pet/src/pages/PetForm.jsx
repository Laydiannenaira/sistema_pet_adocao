import React, { useState } from 'react';
import styles from './PetForm.module.css';

const PetForm = ({ onAddPet }) => {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('cachorro'); 
  const [dataNascimento, setDataNascimento] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const petData = { nome, especie, dataNascimento, descricao };
    
    onAddPet(petData);
    
    setNome('');
    setEspecie('cachorro');
    setDataNascimento('');
    setDescricao('');
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Cadastro de Pet</h1>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome do Pet</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="especie">Espécie</label>
          <select 
            id="especie" 
            value={especie} 
            onChange={(e) => setEspecie(e.target.value)}
          >
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dataNascimento">Data de Nascimento (Aprox.)</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="descricao">Descrição (Personalidade, etc.)</label>
          <textarea
            id="descricao"
            rows="4"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Cadastrar Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;
import React, { useState } from 'react';
import styles from './PetForm.module.css';

const PetForm = () => {
  const [nome, setNome] = useState('');
  // Simplificado para 'cachorro' ou 'gato'
  const [especie, setEspecie] = useState('cachorro'); 
  const [dataNascimento, setDataNascimento] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('disponível');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const petData = { nome, especie, dataNascimento, descricao, status };
    console.log('Dados do Pet para enviar:', petData);
    
    // TODO: Enviar 'petData' para o Backend
    
    alert('Pet cadastrado (simulação)!');
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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        {/* Campo: Espécie (ATUALIZADO) */}
        <div className={styles.formGroup}>
          <label htmlFor="especie">Espécie</label>
          <select 
            id="especie" 
            value={especie} 
            onChange={(e) => setEspecie(e.target.value)}
          >
            {/* Opções agora restritas a cachorro e gato */}
            <option value="cachorro">Cachorro</option>
            <option value="gato">Gato</option>
          </select>
        </div>

        {/* Campo: Data de Nascimento */}
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

        {/* Campo: Descrição */}
        <div className={styles.formGroup}>
          <label htmlFor="descricao">Descrição (Personalidade, etc.)</label>
          <textarea
            id="descricao"
            rows="4"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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
            <option value="disponível">Disponível</option>
            <option value="adotado">Adotado</option>
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
import React, { useState } from 'react';
import styles from './AdopterForm.module.css'; 

const AdopterForm = ({ onAddAdopter }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const adopterData = { nome, email, telefone, endereco };
    
    onAddAdopter(adopterData);
    
    setNome('');
    setEmail('');
    setTelefone('');
    setEndereco('');
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Cadastro de Adotante</h1>
      
      <form onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endereco">Endereço Completo</label>
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Cadastrar Adotante
        </button>
      </form>
    </div>
  );
};

export default AdopterForm;
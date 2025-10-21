import React, { useState } from 'react';
// Vamos usar um novo arquivo CSS, mas com as mesmas classes
import styles from './AdopterForm.module.css'; 

const AdopterForm = () => {
  // Estados para cada campo do formulário, conforme PDF 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const adopterData = { nome, email, telefone, endereco };
    
    console.log('Dados do Adotante para enviar:', adopterData);
    
    // TODO: Enviar 'adopterData' para o seu Backend
    // Ex: fetch('/api/adotantes', { method: 'POST', body: JSON.stringify(adopterData) })

    alert('Adotante cadastrado (simulação)!');
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Cadastro de Adotante</h1>
      
      <form onSubmit={handleSubmit}>
        {/* Campo: Nome Completo [cite: 22] */}
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

        {/* Campo: E-mail [cite: 23] */}
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

        {/* Campo: Telefone [cite: 24] */}
        <div className={styles.formGroup}>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel" // Tipo 'tel' é bom para semântica
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(XX) XXXXX-XXXX"
            required
          />
        </div>

        {/* Campo: Endereço [cite: 25] */}
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
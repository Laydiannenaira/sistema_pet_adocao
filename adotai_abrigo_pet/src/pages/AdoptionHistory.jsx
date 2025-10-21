import React, { useState, useEffect } from "react";
import styles from "./AdoptionHistory.module.css";
// --- DADOS MOCk ---
// Isso vem do backend depois

const mockAdoptions = [
  {
    id: 1,
    data_adocao: "2025-10-01",
    pet: { nome: "Fumaça", especie: "gato", imgUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1143" },
    adotante: { nome: "Maria Silva" },
  },
  {
    id: 2,
    data_adocao: "2025-09-15",
    pet: { nome: "Rex", especie: "cachorro", imgUrl: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=686" },
    adotante: { nome: "João Souza" },
  },
  {
    id: 3,
    data_adocao: "2025-09-05",
    pet: { nome: "Mia", especie: "gato", imgUrl: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
    adotante: { nome: "Ana Pereira" },
  },
];
// --- FIM DO MOCk ---

const AdoptionHistory = () => {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    setAdoptions(mockAdoptions);
  }, []);

  return (
    <div className={styles.historyContainer}>
      <h1 className={styles.title}>Histórico de Adoções</h1>

      <div className={styles.list}>
        {/* .map() transformando itens da lista em cards */}
        {adoptions.map((adocao) => (
          <div key={adocao.id} className={styles.card}>
            <img src={adocao.pet.imgUrl}
            alt={`Foto de ${adocao.pet.nome}, um ${adocao.pet.especie}`} 
            className={styles.petImage}/>
            <h2 className={styles.petName}>{adocao.pet.nome}</h2>
            <p className={styles.info}>
              <strong>Adotado por:</strong> {adocao.adotante.nome}
            </p>
            <p className={styles.info}>
              <strong>Espécie:</strong> {adocao.pet.especie}
            </p>
            <p className={styles.date}>
              {/* Formata a data para o padrão pt-BR */}
              {/* Adicionado timeZone: 'UTC' para evitar erros de data de um dia para o outro */}
              Adotado em:{" "}
              {new Date(adocao.data_adocao).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionHistory;

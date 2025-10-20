import React, { useState, useEffect } from "react";
import styles from "./AdoptionHistory.module.css";

// --- DADOS MOCk ---
// Isso vem do backend depois
const mockAdoptions = [
  {
    id: 1,
    data_adocao: "2025-10-01",
    pet: { nome: "Fumaça", especie: "gato" },
    adotante: { nome: "Maria Silva" },
  },
  {
    id: 2,
    data_adocao: "2025-09-15",
    pet: { nome: "Rex", especie: "cachorro" },
    adotante: { nome: "João Souza" },
  },
  {
    id: 3,
    data_adocao: "2025-09-05",
    pet: { nome: "Mia", especie: "gato" },
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

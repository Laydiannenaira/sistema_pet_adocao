import React, { useState } from "react"; 
import styles from "./PetList.module.css"; 

const PetList = ({ availablePets, onAdopt }) => {
  const [specieFilter, setSpecieFilter] = useState('ambos'); 
  const filteredPets = availablePets.filter(item => {
    
    if (specieFilter === 'ambos') {
      return true; 
    }

    return item.especie === specieFilter;
  });

  return (
    <div className={styles.listContainer}> 
      <h1 className={styles.title}>Pets Disponíveis para Adoção</h1>
      <div className={styles.filterContainer}>
        <strong>Filtrar por espécie:</strong>
        <div className={styles.filterOptions}>
          <label>
            <input type="radio" name="specieFilter" value="ambos" checked={specieFilter === 'ambos'} onChange={(e) => setSpecieFilter(e.target.value)} />
            Ambos
          </label>
          <label>
            <input type="radio" name="specieFilter" value="cachorro" checked={specieFilter === 'cachorro'} onChange={(e) => setSpecieFilter(e.target.value)} />
            Cachorros
          </label>
          <label>
            <input type="radio" name="specieFilter" value="gato" checked={specieFilter === 'gato'} onChange={(e) => setSpecieFilter(e.target.value)} />
            Gatos
          </label>
        </div>
      </div>

      <div className={styles.list}>
        {filteredPets.map((item) => (
          <div key={item.id} className={styles.card}>
            <img
              src={item.imgUrl} 
              alt={`Foto de ${item.nome}, um ${item.especie}`}
              className={styles.petImage}
            />
            <h2 className={styles.petName}>{item.nome}</h2>
            <p className={styles.info}>
              <strong>Espécie:</strong> {item.especie}
            </p>
            <p className={styles.info}>
              <strong>Descrição:</strong> {item.descricao}
            </p>

            <button 
              className={styles.adoptButton}
              onClick={() => onAdopt(item)}
            >
              Adotar {item.nome}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
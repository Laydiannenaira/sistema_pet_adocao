// import React, { useState } from "react"; 
// import styles from "./PetList.module.css"; 

// const PetList = ({ availablePets = [], onAdopt }) => {
//   const [specieFilter, setSpecieFilter] = useState('ambos'); 

//   const filteredPets = availablePets.filter(item => {
    
//     if (specieFilter === 'ambos') {
//       return true; 
//     }

//     return item.especie === specieFilter;
//   });

//   return (
//     <div className={styles.listContainer}> 
//       <h1 className={styles.title}>Pets Disponíveis para Adoção</h1>
//       <div className={styles.filterContainer}>
//         <strong>Filtrar por espécie:</strong>
//         <div className={styles.filterOptions}>
//           <label>
//             <input type="radio" name="specieFilter" value="ambos" checked={specieFilter === 'ambos'} onChange={(e) => setSpecieFilter(e.target.value)} />
//             Ambos
//           </label>
//           <label>
//             <input type="radio" name="specieFilter" value="cachorro" checked={specieFilter === 'cachorro'} onChange={(e) => setSpecieFilter(e.target.value)} />
//             Cachorros
//           </label>
//           <label>
//             <input type="radio" name="specieFilter" value="gato" checked={specieFilter === 'gato'} onChange={(e) => setSpecieFilter(e.target.value)} />
//             Gatos
//           </label>
//         </div>
//       </div>

//       <div className={styles.list}>
//         {filteredPets.map((item) => (
//           <div key={item.id} className={styles.card}>
//             <img
//               src={item.imgUrl} 
//               alt={`Foto de ${item.nome}, um ${item.especie}`}
//               className={styles.petImage}
//             />
//             <h2 className={styles.petName}>{item.nome}</h2>
//             <p className={styles.info}>
//               <strong>Espécie:</strong> {item.especie}
//             </p>
//             <p className={styles.info}>
//               <strong>Descrição:</strong> {item.descricao}
//             </p>

//             <button 
//               className={styles.adoptButton}
//               onClick={() => onAdopt(item)}
//             >
//               Adotar {item.nome}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PetList;

import React, { useState, useEffect } from "react";
import styles from "./PetList.module.css";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [specieFilter, setSpecieFilter] = useState('ambos');

  // Busca os pets da API quando o componente é montado
  useEffect(() => {
    fetch('http://localhost:3000/pets/all')
      .then(res => res.json())
      .then(data => {
        setPets(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar pets:', err);
        setLoading(false);
      });
  }, []);

  const handleAdopt = (petId) => {
    console.log('Adotar pet:', petId);
    alert(`Pet ${petId} será adotado!`);
  };

  if (loading) {
    return <div className={styles.loading}>Carregando pets...</div>;
  }

  // Filtra os pets de acordo com a espécie selecionada
  const filteredPets = pets.filter(item => {
    if (specieFilter === 'ambos') {
      return true;
    }
    return item.species === specieFilter || item.especie === specieFilter;
  });

  return (
    <div className={styles.petListContainer}>
      <h2>Pets Disponíveis para Adoção</h2>
      
      <div className={styles.filterGroup}>
        <strong>Filtrar por espécie:</strong>
        <div className={styles.filterOptions}>
          <label>
            <input 
              type="radio" 
              name="specieFilter" 
              value="ambos" 
              checked={specieFilter === 'ambos'} 
              onChange={(e) => setSpecieFilter(e.target.value)} 
            />
            Ambos
          </label>
          <label>
            <input 
              type="radio" 
              name="specieFilter" 
              value="cachorro" 
              checked={specieFilter === 'cachorro'} 
              onChange={(e) => setSpecieFilter(e.target.value)} 
            />
            Cachorros
          </label>
          <label>
            <input 
              type="radio" 
              name="specieFilter" 
              value="gato" 
              checked={specieFilter === 'gato'} 
              onChange={(e) => setSpecieFilter(e.target.value)} 
            />
            Gatos
          </label>
        </div>
      </div>

      <div className={styles.petGrid}>
        {filteredPets.length === 0 ? (
          <p className={styles.emptyMessage}>Nenhum pet disponível no momento.</p>
        ) : (
          filteredPets.map(item => (
            <div key={item.id} className={styles.petCard}>
              <h3>{item.name || item.nome}</h3>
              <p><strong>Espécie:</strong> {item.species || item.especie}</p>
              {item.age && <p><strong>Idade:</strong> {item.age} ano(s)</p>}
              <p><strong>Descrição:</strong> {item.description || item.descricao}</p>
              <p><strong>Status:</strong> {item.status === 'available' ? 'Disponível' : 'Adotado'}</p>
              <button 
                onClick={() => handleAdopt(item.id)}
                className={styles.adoptButton}
                disabled={item.status === 'adopted'}
              >
                {item.status === 'available' ? 'Adotar' : 'Já Adotado'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PetList;

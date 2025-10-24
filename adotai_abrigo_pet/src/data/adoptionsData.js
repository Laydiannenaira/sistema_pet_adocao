// src/data/adoptionsData.js
import { allPetsData } from './petsData';
import { allAdoptersData } from './adoptersData';

export const allAdoptionsData = [
  {
    id: 1,
    data_adocao: "2025-10-01",
    pet: allPetsData.find(p => p.id === 10), // Fumaça
    adotante: allAdoptersData.find(a => a.id === 1), // Maria Silva
  },
  {
    id: 2,
    data_adocao: "2025-09-15",
    pet: allPetsData.find(p => p.id === 11), // Rex
    adotante: allAdoptersData.find(a => a.id === 2), // João Souza
  },
];
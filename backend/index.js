import express from 'express';
import { PrismaClient } from '@prisma/client';  

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/pets', async (req, res) => {
  const pets = await prisma.pet.findMany();
  return res.status(200).json(pets);
});

app.post('/pets', async (req, res) => {
  
  const { name, species, birth_date, description, status } = req.body;
  const pet = await prisma.pet.create({
    data: {
      name,
      species,
      birth_date,
      description,
      status,
    },
  });
  res.status(201).json(pet);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

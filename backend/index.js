import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();



// ===== PETS =====

// Listar todos os pets
app.get('/pets', async (req, res) => {
  const pets = await prisma.pet.findMany();
  res.status(200).json(pets);
});

// Criar um novo pet
app.post('/pets', async (req, res) => {
  const { name, species, age, description, status } = req.body;
  const pet = await prisma.pet.create({
    data: {
      name,
      species,
      age,
      description,
      status: status || 'available',
    },
  });
  res.status(201).json(pet);
});

// ===== ADOPTERS =====

// Listar todos os adotantes
app.get('/adopters', async (req, res) => {
  const adopters = await prisma.adopter.findMany();
  res.status(200).json(adopters);
});

// Criar um novo adotante
app.post('/adopters', async (req, res) => {
  const { name, email, phone, address } = req.body;
  const adopter = await prisma.adopter.create({
    data: { name, email, phone, address },
  });
  res.status(201).json(adopter);
});

// ===== ADOPTIONS =====

// Registrar uma adoção
app.post('/adoptions', async (req, res) => {
  const { petId, adopterId, adoptionDate } = req.body;

  // Atualizar status do pet
  await prisma.pet.update({
    where: { id: petId },
    data: { status: 'adopted' },
  });

  const adoption = await prisma.adoption.create({
    data: {
      petId,
      adopterId,
      adoptionDate: adoptionDate || new Date(),
    },
    include: {
      pet: true,
      adopter: true,
    },
  });

  res.status(201).json(adoption);
});

// Listar todas as adoções
app.get('/adoptions', async (req, res) => {
  const adoptions = await prisma.adoption.findMany({
    include: {
      pet: true,
      adopter: true,
    },
  });
  res.status(200).json(adoptions);
});

// ===== START SERVER =====
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

const prisma = new PrismaClient();



// ===== PETS =====

// Listar todos os pets
app.get('/pets', async (req, res) => {
  try {
    const pets = await prisma.pet.findMany();
    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar os pets', error: error.message });
  }
});


// Criar um novo pet
app.post('/pets', async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o pet', error: error.message });
  }
});


// ===== ADOPTERS =====

// Listar todos os adotantes
app.get('/adopters', async (req, res) => {
  try {
    const adopters = await prisma.adopter.findMany();
    res.status(200).json(adopters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar os adotantes', error: error.message });
  }
});


// Criar um novo adotante
app.post('/adopters', async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    const adopter = await prisma.adopter.create({
      data: { name, email, phone, address },
    });

    res.status(201).json(adopter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o adotante', error: error.message });
  }
});

// ===== ADOPTIONS =====

// Registrar uma adoção
app.post('/adoptions', async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar a adoção', error: error.message });
  }
});

// Listar todas as adoções
app.get('/adoptions', async (req, res) => {
  try {
    const adoptions = await prisma.adoption.findMany({
    include: {
        pet: true,
        adopter: true,
      },
    });
    res.status(200).json(adoptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao listar adoções', error: error.message });
  }
});

// ===== START SERVER =====
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

/* ---------- IMPORTS ---------- */
// Importa o framework Express para criar o servidor web
import express from "express";
// Importa o PrismaClient para acessar o banco de dados e Prisma para tratar erros conhecidos
import { PrismaClient, Prisma } from "@prisma/client";


const app = express();
app.use(express.json());



/* ---------- INICIALIZAÇÃO ---------- */

const prisma = new PrismaClient(); // Cria o cliente do Prisma para fazer queries no banco
app.use(express.json()); // Permite que o Express interprete JSON no body das requisições

const PORT = process.env.PORT || 8080; // Porta do servidor (pode vir de variável de ambiente)

/* ---------- HELPERS DE TRADUÇÃO ---------- */
// Mapas para tradução entre status do banco (inglês) e status exibido ao usuário (português)
const statusMapEnToPt = {
  available: "Disponível",
  adopted: "Adotado",
};


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

const statusMapPtToEn = {
  disponivel: "available",
  disponível: "available",
  adotado: "adopted",
};

// Função que converte status do banco para PT
function toPtStatus(enStatus) {
  return statusMapEnToPt[enStatus] ?? enStatus; // retorna status original se não tiver tradução
}

// Função que converte status de PT ou EN para EN (para salvar no banco)
function toEnStatus(maybePtOrEn) {
  if (!maybePtOrEn) return undefined;
  const lower = String(maybePtOrEn).toLowerCase();
  if (statusMapPtToEn[lower]) return statusMapPtToEn[lower];
  // assume já está em inglês e é válido
  if (["available", "adopted"].includes(lower)) return lower;
  return undefined;
}

/* ---------- ROTAS PETS ---------- */

// GET /pets?species=&status=
// - Lista todos os pets
// - Permite filtro por espécie ou status
app.get("/pets", async (req, res) => {
  try {
    const { species, status } = req.query;

    // Converte status recebido do usuário (PT) para inglês para consultar o banco
    const enStatus = status ? toEnStatus(status) : undefined;

    const where = {};
    if (species) where.species = species;
    if (enStatus) where.status = enStatus;

    // Busca no banco os pets que atendem aos filtros
    const pets = await prisma.pet.findMany({ where });

    // Converte status para português na resposta ao usuário
    const petsResp = pets.map((p) => ({
      ...p,
      status: toPtStatus(p.status),
    }));

    return res.json(petsResp);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar pets" });
  }
});

// POST /pets
// - Cria um novo pet
app.post("/pets", async (req, res) => {
  try {
    const { name, species, age, description, status } = req.body;
    if (!name || !species) {
      return res.status(400).json({ error: "name and species are required" });
    }

    // Converte status enviado em PT para EN, padrão 'available'
    const enStatus = status ? toEnStatus(status) : "available";
    if (!["available", "adopted"].includes(enStatus)) {
      return res.status(400).json({ error: "status inválido" });
    }

    // Cria o pet no banco
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

        age: age ?? null,
        description,
        status: enStatus,
      },
    });

    // Retorna o pet criado, traduzindo o status para PT
    return res.status(201).json({ ...pet, status: toPtStatus(pet.status) });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao criar pet" });
  }
});

/* ---------- ROTAS ADOPTERS ---------- */

// GET /adopters
// - Lista todos os adotantes
app.get("/adopters", async (req, res) => {
  try {
    const adopters = await prisma.adopter.findMany();
    return res.json(adopters);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar adotantes" });
  }
});

// POST /adopters
// - Cria um novo adotante
app.post("/adopters", async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "name and email are required" });
    }

    // Cria no banco
    const adopter = await prisma.adopter.create({
      data: { name, email, phone, address },
    });


    res.status(201).json(adopter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o adotante', error: error.message });
    return res.status(201).json(adopter);
  } catch (err) {
    console.error(err);
    // Prisma erro conhecido: email duplicado
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return res.status(409).json({ error: "Email já cadastrado" });
    }
    return res.status(500).json({ error: "Erro ao criar adotante" });

  }
});

/* ---------- ROTAS ADOPTIONS ---------- */


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
// POST /adoptions
// - Registra uma adoção
// Estratégia: transação segura
app.post("/adoptions", async (req, res) => {
  try {
    const { petId, adopterId, adoptionDate } = req.body;
    if (!petId || !adopterId) {
      return res
        .status(400)
        .json({ error: "petId e adopterId são obrigatórios" });
    }

    // Verifica existência dos registros
    const pet = await prisma.pet.findUnique({ where: { id: petId } });
    if (!pet) return res.status(404).json({ error: "Pet não encontrado" });

    const adopter = await prisma.adopter.findUnique({
      where: { id: adopterId },
    });
    if (!adopter)
      return res.status(404).json({ error: "Adotante não encontrado" });

    // Transação para evitar condições de corrida
    const result = await prisma.$transaction(async (tx) => {
      // Atualiza status do pet apenas se ainda estiver disponível
      const updateResult = await tx.pet.updateMany({
        where: { id: petId, status: "available" },
        data: { status: "adopted" },
      });

      if (updateResult.count === 0) {
        // Já foi adotado
        throw new Error("Pet já foi adotado");
      }

      // Cria registro de adoção
      const adoption = await tx.adoption.create({
        data: {
          petId,
          adopterId,
          adoptionDate: adoptionDate ? new Date(adoptionDate) : new Date(),
        },
        include: { pet: true, adopter: true },
      });

      return adoption;
    });

    // Traduz status do pet para PT antes de retornar
    const response = {
      ...result,
      pet: { ...result.pet, status: toPtStatus(result.pet.status) },
    };

    return res.status(201).json(response);
  } catch (err) {
    console.error(err);
    if (err.message === "Pet já foi adotado") {
      return res.status(400).json({ error: "Pet já foi adotado" });
    }
    return res.status(500).json({ error: "Erro ao registrar adoção" });
  }
});

// GET /adoptions
// - Lista todas as adoções
app.get("/adoptions", async (req, res) => {
  try {
    const adoptions = await prisma.adoption.findMany({
      include: { pet: true, adopter: true }, // Inclui dados do pet e adotante
      orderBy: { adoptionDate: "desc" }, // Ordena por data da adoção (mais recente primeiro)
    });

    // Tradução dos status dos pets
    const resp = adoptions.map((a) => ({
      ...a,
      pet: { ...a.pet, status: toPtStatus(a.pet.status) },
    }));

    return res.json(resp);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao listar adoções" });
  }
});

/* ---------- START SERVER ---------- */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

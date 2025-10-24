// import { Router } from "express";
// import { AdoptionsController } from "../controllers/adoptions.controller";

// export class AdoptionsRouter {
//   public router: Router;
//   private controller: AdoptionsController;

//   constructor() {
//     this.router = Router();
//     this.controller = new AdoptionsController();
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router.get("/", (req, res) => this.controller.getAll(req, res));
//     this.router.post("/", (req, res) => this.controller.create(req, res));
//   }
// }

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class AdoptionsService {
  async getAll(filters?: { adopterId?: number, petId?: number }) {
    return prisma.adoption.findMany({
      where: {
        adopterId: filters?.adopterId,
        petId: filters?.petId,
      },
      include: { pet: true, adopter: true }
    });
  }
  async getOne(id: number) {
    return prisma.adoption.findUnique({ where: { id }, include: { pet: true, adopter: true } });
  }
  async create(data: { petId: number, adopterId: number }) {
    // Regras extra
    const existing = await prisma.adoption.findFirst({ where: { petId: data.petId } });
    if (existing) throw new Error('Este pet já foi adotado!');
    return prisma.adoption.create({ data });
  }
  async update(id: number, data: Partial<{ petId: number, adopterId: number }>) {
    return prisma.adoption.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.adoption.delete({ where: { id } });
  }
}

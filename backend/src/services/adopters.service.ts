import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class AdoptersService {
  async getAll(filters?: { name?: string, email?: string }) {
    return prisma.adopter.findMany({
      where: {
        name: filters?.name,
        email: filters?.email,
      },
      include: { adoptions: true }
    });
  }
  async getOne(id: number) {
    return prisma.adopter.findUnique({ where: { id }, include: { adoptions: true } });
  }
  async create(data: { name: string, email: string, phone?: string, address?: string }) {
    return prisma.adopter.create({ data });
  }
  async update(id: number, data: Partial<{ name: string, email: string, phone?: string, address?: string }>) {
    return prisma.adopter.update({ where: { id }, data });
  }
  async delete(id: number) {
    return prisma.adopter.delete({ where: { id } });
  }
}


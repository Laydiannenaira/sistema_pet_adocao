// // import { PrismaClient, Prisma } from "@prisma/client";
// // export class PetsService {
// //     constructor(private readonly prisma:PrismaClient) {}

// //     async getAllPets(){
// //         return this.prisma.pet.getAll();
// //     }

// //     async getOnePet(id:number){
// //         return this.prisma.pet.getOne(id);
// //     }

// //     async createPet(data: {name: string, age?: number,type?: string, description?: string }){
// //         return this.prisma.pet.create({data})
// //     }
// //  }

// import { PrismaClient } from "@prisma/client";

// export class PetsService {
//   constructor(private readonly prisma: PrismaClient) {}

//   async getAllPets() {
//     // Retorna todos os pets cadastrados
//     return this.prisma.pet.findMany();
//   }

//   async getOnePet(id: number) {
//     // Retorna um pet pelo id
//     return this.prisma.pet.findUnique({ where: { id } });
//   }

//   async createPet(data: { 
//     name: string, 
//     age?: number, 
//     species?: string, 
//     description?: string, 
//     status?: string 
//   }) {
//     // IMPORTANTE: "species" e "status" batem com o seu schema.prisma
//     return this.prisma.pet.create({ data });
//   }
// }

// import { PrismaClient } from "@prisma/client";

// export class PetsService {
//   private prisma: PrismaClient;

//   constructor() {
//     this.prisma = new PrismaClient();
//   }

//   async getAllPets() {
//     return this.prisma.pet.findMany();
//   }

//   async getOnePet(id: number) {
//     return this.prisma.pet.findUnique({ where: { id } });
//   }

//   async createPet(data: { 
//     name: string, 
//     age?: number, 
//     species?: string,
//     description?: string, 
//     status?: string 
//   }) {
//     return this.prisma.pet.create({ data });
//   }

//   async updatePet(id: number, data: any) {
//     return this.prisma.pet.update({ where: { id }, data });
//   }
// }

import { PrismaClient } from "@prisma/client";

export class PetsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllPets() {
    return this.prisma.pet.findMany();
  }

  async getOnePet(id: number) {
    return this.prisma.pet.findUnique({ where: { id } });
  }

  async createPet(data: { 
    name: string,                  // obrigatório
    species: string,               // obrigatório
    age?: number,                  // opcional
    description?: string,          // opcional
    status?: "available" | "adopted"             // opcional (tem default no banco)
  }) {
    return this.prisma.pet.create({ data });
  }

  async updatePet(id: number, data: any) {
    return this.prisma.pet.update({ where: { id }, data });
  }
}

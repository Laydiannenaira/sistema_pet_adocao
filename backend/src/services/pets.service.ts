import { PrismaClient, Prisma } from "@prisma/client";
export class PetsService {
    constructor(private readonly prisma:PrismaClient) {}

    async getAllPets(){
        return this.prisma.pet.getAll();
    }

    async getOnePet(id:number){
        return this.prisma.pet.getOne(id);
    }

    async createPet(data: {name: string, age?: number,type?: string, description?: string }){
        return this.prisma.pet.create({data})
    }
 }
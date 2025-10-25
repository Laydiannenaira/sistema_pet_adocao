// // import { Request, Response } from "express";
// // import {IpetsController} from "../ipets.controller.js";




// // export class PetsController implements IpetsController {

// //     getAll = async (req: Request, res: Response): Promise<void> => {
// //         res.json([{ id: 1, name: "Rex" }, { id: 2, name: "Luna" }]);
// //     };

// //     getOne = async (req: Request, res: Response): Promise<void> => {
// //         const { id } = req.params;
// //         res.json({ id, name: "Rex" });
// //     };

// //     create = async (req: Request, res: Response): Promise<void> => {
// //         const pet = req.body;
// //         res.status(201).json({ message: "Pet criado com sucesso", pet });
// //     };

// //     update = async (req: Request, res: Response): Promise<void> => {
// //         const { id } = req.params;
// //         const pet = req.body;
// //         res.json({ message: "Pet atualizado", id, pet });
// //     };
// // }

// import { Request, Response } from "express";
// import { PetsService } from "../../services/pets.service";

// export class PetsController {
//   private petsService = new PetsService();

//   getAll = async (req: Request, res: Response) => {
//     const pets = await this.petsService.getAllPets();
//     res.json(pets);
//   };

//   getOne = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const pet = await this.petsService.getOnePet(Number(id));
//     if (pet) {
//       res.json(pet);
//     } else {
//       res.status(404).json({ message: "Pet não encontrado" });
//     }
//   };

//   create = async (req: Request, res: Response) => {
//     try {
//       const pet = await this.petsService.createPet(req.body);
//       res.status(201).json({ message: "Pet criado com sucesso", pet });
//     } catch (error: any) {
//       res.status(500).json({ message: "Erro ao criar pet", error: error.message });
//     }
//   };

//   update = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//       const pet = await this.petsService.updatePet(Number(id), req.body);
//       res.json({ message: "Pet atualizado", pet });
//     } catch (error: any) {
//       res.status(500).json({ message: "Erro ao atualizar pet", error: error.message });
//     }
//   };
// }

import { Request, Response } from "express";
import { PetsService } from "../../services/pets.service";

export class PetsController {
  private petsService = new PetsService();

  getAll = async (req: Request, res: Response) => {
    const pets = await this.petsService.getAllPets();
    res.json(pets);
  };

  getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const pet = await this.petsService.getOnePet(Number(id));
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ message: "Pet não encontrado" });
    }
  };

  create = async (req: Request, res: Response) => {
    const { name, species, age, description, status } = req.body;
    if (!name || !species) {
      return res.status(400).json({ message: "Campos obrigatórios faltando" });
    }
    try {
      const pet = await this.petsService.createPet({ name, species, age, description, status });
      res.status(201).json({ message: "Pet criado com sucesso", pet });
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao criar pet", error: error.message });
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const pet = await this.petsService.updatePet(Number(id), req.body);
      res.json({ message: "Pet atualizado", pet });
    } catch (error: any) {
      res.status(500).json({ message: "Erro ao atualizar pet", error: error.message });
    }
  };
}

// // // import { Request, Response } from "express";
// // // import { AdoptionsService } from "../services/adoptions.service";

// // // export class AdoptionsController {
// // //   private service = new AdoptionsService();

// // //   async getAll(req: Request, res: Response) {
// // //     const adocoes = await this.service.getAll();
// // //     res.json(adocoes);
// // //   }

// // //   async create(req: Request, res: Response) {
// // //     try {
// // //       const novaAdocao = await this.service.create(req.body);
// // //       res.status(201).json(novaAdocao);
// // //     } catch (error: any) {
// // //       res.status(400).json({ error: error.message });
// // //     }
// // //   }
// // // }

// // import { Request, Response } from "express";
// // import { AdoptionsService } from "../services/adoptions.service";

// // export class AdoptionsController {
// //   private service = new AdoptionsService();

// //   async getAll(req: Request, res: Response) {
// //     const filters = {
// //       adopterId: req.query.adopterId ? Number(req.query.adopterId) : undefined,
// //       petId: req.query.petId ? Number(req.query.petId) : undefined
// //     }
// //     const adocoes = await this.service.getAll(filters);
// //     res.json(adocoes);
// //   }

// //   async getOne(req: Request, res: Response) {
// //     const id = Number(req.params.id);
// //     const adocao = await this.service.getOne(id);
// //     res.json(adocao);
// //   }

// //   async create(req: Request, res: Response) {
// //     try {
// //       const novaAdocao = await this.service.create(req.body);
// //       res.status(201).json(novaAdocao);
// //     } catch (error: any) {
// //       res.status(400).json({ error: error.message });
// //     }
// //   }

// //   async update(req: Request, res: Response) {
// //     const id = Number(req.params.id);
// //     const updated = await this.service.update(id, req.body);
// //     res.json(updated);
// //   }

// //   async delete(req: Request, res: Response) {
// //     const id = Number(req.params.id);
// //     await this.service.delete(id);
// //     res.status(204).end();
// //   }
// // }


// import { Router } from "express";
// import { AdoptersController } from "../controllers/adopters.controller";

// export class AdoptersRouter {
//   public router: Router;
//   private controller: AdoptersController;

//   constructor() {
//     this.router = Router();
//     this.controller = new AdoptersController();
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router.get("/", (req, res) => this.controller.getAll(req, res));   // Filtro via query params
//     this.router.get("/:id", (req, res) => this.controller.getOne(req, res));
//     this.router.post("/", (req, res) => this.controller.create(req, res));
//     this.router.put("/:id", (req, res) => this.controller.update(req, res));
//     this.router.delete("/:id", (req, res) => this.controller.delete(req, res));
//   }
// }

import { Request, Response } from "express";
import { AdoptionsService } from "../services/adoptions.service";

export class AdoptionsController {
  private service = new AdoptionsService();

  async getAll(req: Request, res: Response) {
    const adocoes = await this.service.getAll();
    res.json(adocoes);
  }

  async getOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const adocao = await this.service.getOne(id);
    res.json(adocao);
  }


  async create(req: Request, res: Response) {
    try {
      const novaAdocao = await this.service.create(req.body);
      res.status(201).json(novaAdocao);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

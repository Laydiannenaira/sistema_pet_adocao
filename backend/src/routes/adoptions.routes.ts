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


import { Router } from "express";
import { AdoptionsController } from "../controllers/adoptions.controller";

export class AdoptionsRouter {
  public router: Router;
  private controller: AdoptionsController;

  constructor() {
    this.router = Router();
    this.controller = new AdoptionsController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", (req, res) => this.controller.getAll(req, res));   // Filtro via query params
    this.router.get("/:id", (req, res) => this.controller.getOne(req, res));
    this.router.post("/", (req, res) => this.controller.create(req, res));
    // this.router.put("/:id", (req, res) => this.controller.update(req, res));
    // this.router.delete("/:id", (req, res) => this.controller.delete(req, res));
  }
}

// import { Router } from "express";
// import { PetsController } from "../controllers/impl/pets.controller";

// export class PetsRouter {
//     public router: Router;
//     private controller: PetsController;

//     constructor() {
//         this.router = Router();
//         this.controller = new PetsController();
//         this.initializeRoutes();
//     }

//     private initializeRoutes(): void {
//         this.router.get("/all", this.controller.getAll);
//         this.router.get("/:id", this.controller.getOne);
//         this.router.post("/", this.controller.create);
//         this.router.put("/:id", this.controller.update);
//     }
// }

import { Router } from "express";
import { PetsController } from "../controllers/impl/pets.controller";

export class PetsRouter {
  public router: Router;
  private controller: PetsController;

  constructor() {
    this.router = Router();
    this.controller = new PetsController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get("/all", this.controller.getAll);
    this.router.get("/:id", this.controller.getOne);
    this.router.post("/", this.controller.create);
    this.router.put("/:id", this.controller.update);
  }
}

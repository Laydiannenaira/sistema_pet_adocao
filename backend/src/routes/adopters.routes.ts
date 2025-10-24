
import { Router } from "express";
import { AdoptersController } from "../controllers/adopters.controller";

export class AdoptersRouter {
  public router: Router;
  private controller: AdoptersController;

  constructor() {
    this.router = Router();
    this.controller = new AdoptersController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", (req, res) => this.controller.getAll(req, res));
    this.router.get("/:id", (req, res) => this.controller.getOne(req, res));
    this.router.post("/", (req, res) => this.controller.create(req, res));
  }
}

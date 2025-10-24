
import { Request, Response } from "express";
import { AdoptersService } from "../services/adopters.service";

export class AdoptersController {
  private service = new AdoptersService();

  async getAll(req: Request, res: Response) {
    const adotantes = await this.service.getAll();
    res.json(adotantes);
  }

  async getOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const adotante = await this.service.getOne(id);
    res.json(adotante);
  }

  async create(req: Request, res: Response) {
    const novoAdotante = await this.service.create(req.body);
    res.status(201).json(novoAdotante);
  }
}

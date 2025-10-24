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

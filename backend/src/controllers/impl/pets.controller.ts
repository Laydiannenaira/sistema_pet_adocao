import { Request, Response } from "express";
import {IpetsController} from "../ipets.controller.js";




export class PetsController implements IpetsController {

    getAll = async (req: Request, res: Response): Promise<void> => {
        res.json([{ id: 1, name: "Rex" }, { id: 2, name: "Luna" }]);
    };

    getOne = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        res.json({ id, name: "Rex" });
    };

    create = async (req: Request, res: Response): Promise<void> => {
        const pet = req.body;
        res.status(201).json({ message: "Pet criado com sucesso", pet });
    };

    update = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const pet = req.body;
        res.json({ message: "Pet atualizado", id, pet });
    };
}

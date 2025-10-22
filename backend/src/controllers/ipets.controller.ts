import {Request, Response} from "express";

export interface IpetsController {

    getAll(req: Request, res: Response): Promise<void>;

    getOne(req: Request, res: Response): Promise<void>;

    create(req: Request, res: Response): Promise<void>;

    update(req: Request, res: Response): Promise<void>;
}

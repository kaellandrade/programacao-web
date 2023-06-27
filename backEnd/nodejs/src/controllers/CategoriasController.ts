import { Request, Response } from "express";
import { categoria } from "../repo/categoria";

export class CategoriasController {
  async handle(req: Request, response: Response) {
    const repo = await categoria.find();

    console.log(repo);
    return response.json(repo);
    // const service = new GetCategoriasService();
    // return response.json(await service.execute());
  }
}

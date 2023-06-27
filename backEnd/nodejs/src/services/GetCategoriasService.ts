import { getRepository } from "typeorm";
import { Categoria } from "../entities/categoria";

export class GetCategoriasService {
  async execute() {
    const repo = getRepository(Categoria);

    const categorias = await repo.find();

    return categorias;
  }
}

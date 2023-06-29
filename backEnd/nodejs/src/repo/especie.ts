import { AppDataSource } from "../data-source";
import { Especie } from "../entities/especie";

export const especie = AppDataSource.getRepository(Especie);

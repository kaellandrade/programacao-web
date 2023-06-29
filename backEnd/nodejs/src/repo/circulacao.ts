import { AppDataSource } from "../data-source";
import { Circulacao } from "../entities/circulacao";

export const circulacao = AppDataSource.getRepository(Circulacao);

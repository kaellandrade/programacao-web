import { AppDataSource } from "../data-source";
import { Dinheiro } from "../entities/dinheiro";

export const dinheiro = AppDataSource.getRepository(Dinheiro);

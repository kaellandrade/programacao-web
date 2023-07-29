import { AppDataSource } from '../data-source';
import { Categoria } from '../entities/categoria';

export const categoria = AppDataSource.getRepository(Categoria);

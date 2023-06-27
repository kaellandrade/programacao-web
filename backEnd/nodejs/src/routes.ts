import { CategoriasController } from "./controllers/CategoriasController";
import { Router } from "express";

const routes = Router();

routes.get("/categorias", new CategoriasController().handle);

export default routes;

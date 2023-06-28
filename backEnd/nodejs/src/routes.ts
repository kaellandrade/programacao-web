import { CategoriasController } from "./controllers/CategoriasController";
import { Router } from "express";
import { GetNoParamsController } from "./controllers/GetNoParamsController";

const routes = Router();

routes.get(
  "/evolucaoQuantidadeCirculacaoPorCategoria",
  new GetNoParamsController().evolucaoQuantidadeCirculacaoPorCategoria
);

routes.get(
  "/evolucaoQuantidadeCirculacaoPorDenominacao",
  new GetNoParamsController().evolucaoQuantidadeCirculacaoPorDenominacao
);

routes.get(
  "/diferencaPercentualQuantidadeDenominacao",
  new GetNoParamsController().diferencaPercentualQuantidadeDenominacao
);

export default routes;

import { CategoriasController } from "./controllers/CategoriasController";
import { Router } from "express";
import { GetNoParamsController } from "./controllers/GetNoParamsController";
import { GetParamsController } from "./controllers/GetParamsController";

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
  "/quantidadeCirculacaoMesAno",
  new GetNoParamsController().quantidadeCirculacaoMesAno
);

routes.get(
  "/diferencaPercentualQuantidadeDenominacao",
  new GetNoParamsController().diferencaPercentualQuantidadeDenominacao
);

routes.get(
  "/valorCirculacaoDataEspecifica/:data/:especie",
  new GetParamsController().valorCirculacaoDataEspecifica
);

routes.get(
  "/valorCirculacaoIntervaloAnos/:anoInicio/:anoFim/:especie",
  new GetParamsController().valorCirculacaoIntervaloAnos
);

routes.get(
  "/quantidadeDenominacoesIntervaloAnos/:anoInicio/:anoFim",
  new GetParamsController().quantidadeDenominacoesIntervaloAnos
);

routes.get(
  "/quantidadeCategoriasIntervaloAnos/:anoInicio/:anoFim",
  new GetParamsController().quantidadeCategoriasIntervaloAnos
);



export default routes;

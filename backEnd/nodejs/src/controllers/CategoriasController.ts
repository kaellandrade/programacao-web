import { Request, Response } from "express";
import { categoria } from "../repo/categoria";
import { circulacao } from "../repo/circulacao";
import { especie } from "../repo/especie";
import { dinheiro } from "../repo/dinheiro";

export class CategoriasController {
  async handle(req: Request, response: Response) {
    const categoriaRepository = categoria;
    const circulacaoRepository = circulacao;

    const result = await circulacaoRepository
      .createQueryBuilder("circulacao")
      .select("DATE_PART('year', circulacao.data)", "ano")
      .addSelect("categoria.nome", "categoria")
      .addSelect("SUM(circulacao.quantidade)", "quantidade_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .innerJoin("dinheiro.categoria", "categoria")
      .groupBy("DATE_PART('year', circulacao.data), categoria.nome")
      .orderBy("DATE_PART('year', circulacao.data), categoria.nome")
      .getRawMany();

    console.log(result);

    // const service = new GetCategoriasService();
    // return response.json(await service.execute());
  }
}

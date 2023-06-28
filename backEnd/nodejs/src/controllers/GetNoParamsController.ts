import { Request, Response } from "express";
import { circulacao } from "../repo/circulacao";
import { getRepository } from "typeorm";
import { dinheiro } from "../repo/dinheiro";

export class GetNoParamsController {
  async evolucaoQuantidadeCirculacaoPorCategoria(req: Request, res: Response) {
    const result: any[] = await circulacao
      .createQueryBuilder("circulacao")
      .select("DATE_PART('year', circulacao.data)", "ano")
      .addSelect("categoria.nome", "categoria")
      .addSelect("SUM(circulacao.quantidade)", "quantidade_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .innerJoin("dinheiro.categoria", "categoria")
      .groupBy("DATE_PART('year', circulacao.data), categoria.nome")
      .orderBy("DATE_PART('year', circulacao.data), categoria.nome")
      .getRawMany();

    return res.json(result);
  }

  async evolucaoQuantidadeCirculacaoPorDenominacao(
    req: Request,
    res: Response
  ) {
    const result: any[] = await circulacao
      .createQueryBuilder("circulacao")
      .select("DATE_PART('year', circulacao.data)", "ano")
      .addSelect("dinheiro.denominacao", "denominacao")
      .addSelect("SUM(circulacao.quantidade)", "quantidade_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .groupBy("DATE_PART('year', circulacao.data), dinheiro.denominacao")
      .orderBy("DATE_PART('year', circulacao.data), dinheiro.denominacao")
      .getRawMany();

    return res.json(result);
  }

  async diferencaPercentualQuantidadeDenominacao(req: Request, res: Response) {
    const dinheiroRepository = dinheiro;
    const circulacaoRepository = circulacao;

    // Obter todas as denominações distintas
    const denominacoes = await dinheiroRepository
      .createQueryBuilder("dinheiro")
      .select("DISTINCT dinheiro.denominacao", "denominacao")
      .getRawMany();

    // Obter os anos distintos presentes na tabela circulacao
    const anos = await circulacaoRepository
      .createQueryBuilder("circulacao")
      .select("DISTINCT DATE_PART('year', circulacao.data)", "ano")
      .orderBy("ano", "ASC")
      .getRawMany();

    // Iterar por cada denominação e ano para calcular a diferença percentual
    for (const denominacao of denominacoes) {
      const { denominacao: valorDenominacao } = denominacao;

      for (let i = 1; i < anos.length; i++) {
        const anoAtual = anos[i].ano;
        const anoAnterior = anos[i - 1].ano;

        // Obter a quantidade de circulação para o ano atual e anterior para a denominação atual
        const quantidadeAtual = await circulacaoRepository
          .createQueryBuilder("circulacao")
          .select("SUM(circulacao.quantidade)", "quantidade")
          .innerJoin("circulacao.dinheiro", "dinheiro")
          .where(
            "dinheiro.denominacao = :denominacao AND DATE_PART('year', circulacao.data) = :ano",
            { denominacao: valorDenominacao, ano: anoAtual }
          )
          .getRawOne();

        const quantidadeAnterior = await circulacaoRepository
          .createQueryBuilder("circulacao")
          .select("SUM(circulacao.quantidade)", "quantidade")
          .innerJoin("circulacao.dinheiro", "dinheiro")
          .where(
            "dinheiro.denominacao = :denominacao AND DATE_PART('year', circulacao.data) = :ano",
            { denominacao: valorDenominacao, ano: anoAnterior }
          )
          .getRawOne();

        // Calcular a diferença percentual entre os anos
        const diferencaPercentual =
          (((quantidadeAtual.quantidade || 0) -
            (quantidadeAnterior.quantidade || 0)) /
            (quantidadeAnterior.quantidade || 1)) *
          100;

        console.log(
          `Denominação: ${valorDenominacao} | Ano Atual: ${anoAtual} | Ano Anterior: ${anoAnterior} | Diferença Percentual: ${diferencaPercentual}%`
        );
      }
    }
  }
}

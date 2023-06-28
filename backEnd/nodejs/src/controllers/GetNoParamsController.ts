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

    const denominacoes = await dinheiroRepository.find({
      select: ["denominacao"],
    });

    const anos = await circulacaoRepository
      .createQueryBuilder("circulacao")
      .select("DISTINCT DATE_PART('year', circulacao.data)", "ano")
      .orderBy("ano", "ASC")
      .getRawMany();

    const queryBuilder = circulacaoRepository
      .createQueryBuilder("circulacao")
      .select("dinheiro.denominacao", "denominacao")
      .addSelect("DATE_PART('year', circulacao.data)", "ano")
      .addSelect("SUM(circulacao.quantidade)", "quantidade")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .groupBy("dinheiro.denominacao, DATE_PART('year', circulacao.data)")
      .orderBy(
        "dinheiro.denominacao, DATE_PART('year', circulacao.data)",
        "ASC"
      );

    const result = await queryBuilder.getRawMany();

    const mapResultado = new Map<
      string,
      { ano: number; quantidade: number }[]
    >();
    for (const denominacao of denominacoes) {
      const { denominacao: valorDenominacao } = denominacao;
      const valoresDenominacao = result.filter(
        (item) => item.denominacao === valorDenominacao
      );
      const valoresFormatados = valoresDenominacao.map((item) => ({
        ano: item.ano,
        quantidade: item.quantidade,
      }));
      mapResultado.set(valorDenominacao.toString(), valoresFormatados);
    }

    let lista = [];
    for (const [denominacao, valores] of mapResultado.entries()) {
      for (let i = 1; i < valores.length; i++) {
        const denominacaoAtual = denominacao;
        const denominacaoAnterior = denominacao;
        const anoAtual = valores[i].ano;
        const anoAnterior = valores[i - 1].ano;
        const quantidadeAtual = valores[i].quantidade;
        const quantidadeAnterior = valores[i - 1].quantidade;

        const diferencaPercentual =
          (((quantidadeAtual || 0) - (quantidadeAnterior || 0)) /
            (quantidadeAnterior || 1)) *
          100;

        console.log(
          `Denominação: ${denominacaoAtual} | Ano Atual: ${anoAtual} | Ano Anterior: ${anoAnterior} | Diferença Percentual: ${diferencaPercentual}%`
        );
        lista.push({
          denominacaoAtual,
          anoAtual,
          anoAnterior,
          diferencaPercentual,
        });
      }
    }
    return res.json(lista);
  }
}

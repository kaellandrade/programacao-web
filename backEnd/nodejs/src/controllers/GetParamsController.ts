import { Request, Response } from "express";
import { circulacao } from "../repo/circulacao";
import { getRepository } from "typeorm";
import { dinheiro } from "../repo/dinheiro";

export class GetParamsController {
  
  async valorCirculacaoDataEspecifica(req: Request, res: Response){

    const { data, especie } = req.params; 

    const result: any[] = await circulacao
      .createQueryBuilder("circulacao")
      .select("SUM(circulacao.valor)", "valor_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .innerJoin("dinheiro.especie", "especie")
      .where("circulacao.data = :data", { data })
      .andWhere("especie.nome = :especie", { especie })
      .getRawMany();

    return res.json(result);
  }

  async valorCirculacaoIntervaloAnos(req: Request, res: Response){

    const { anoInicio, anoFim, especie } = req.params; 

    const result: any[] = await circulacao
      .createQueryBuilder("circulacao")
      .select("SUM(circulacao.valor)", "valor_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .innerJoin("dinheiro.especie", "especie")
      .where("EXTRACT(year FROM data) BETWEEN :anoInicio AND :anoFim", { anoInicio, anoFim })
      .andWhere("especie.nome = :especie", { especie })
      .getRawMany();

    return res.json(result);
  }

  async quantidadeDenominacoesIntervaloAnos(req: Request, res: Response){

    const { anoInicio, anoFim} = req.params; 

    const result: any[] = await circulacao
      .createQueryBuilder("circulacao")
      .select("dinheiro.denominacao", "denominacao")
      .addSelect("SUM(circulacao.quantidade)", "quantidade_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .innerJoin("dinheiro.categoria", "categoria")
      .where("EXTRACT(year FROM data) BETWEEN :anoInicio AND :anoFim", { anoInicio, anoFim })
      .groupBy("dinheiro.denominacao")
      .orderBy("SUM(circulacao.quantidade)", "DESC")
      .getRawMany();

    return res.json(result);
  }
  
  async quantidadeCategoriasIntervaloAnos(req: Request, res: Response){

    const { anoInicio, anoFim} = req.params; 

    const result: any[] = await circulacao
      .createQueryBuilder("circulacao")
      .select("categoria.nome", "categoria")
      .addSelect("SUM(circulacao.quantidade)", "quantidade_total")
      .innerJoin("circulacao.dinheiro", "dinheiro")
      .innerJoin("dinheiro.categoria", "categoria")
      .where("EXTRACT(year FROM data) BETWEEN :anoInicio AND :anoFim", { anoInicio, anoFim })
      .groupBy("categoria.nome")
      .orderBy("SUM(circulacao.quantidade)", "DESC")
      .getRawMany();

    return res.json(result);
  }
  
}

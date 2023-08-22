import { Request, Response } from 'express';
import Background from '../repo/backgrounddb';
import { QueryFailedError } from 'typeorm';

import axios from 'axios';
import { categoria } from '../repo/categoria';
import { circulacao } from '../repo/circulacao';
import { Circulacao } from '../entities/circulacao';
import { dinheiro } from '../repo/dinheiro';
import { Dinheiro } from '../entities/dinheiro';
import { AppDataSource } from '../data-source';

interface Root {
	Data: string;
	Quantidade: number;
	Valor: number;
	Categoria: string;
	Denominacao: string;
	Especie: string;
}
export class BackgroundDb {
	constructor() {
		this.getData = this.getData.bind(this);
	}

	async getData(req: Request, res: Response) {
		await this.getCron();
		res.status(201).json({ date: 'sucesso' });
	}

	async getCron() {
		try {
			const date = this.getFullData();

			if (date) {
				const url = `https://olinda.bcb.gov.br/olinda/servico/mecir_dinheiro_em_circulacao/versao/v1/odata/informacoes_diarias_com_categoria?$filter=Data ge ${date}`;

				const response = await axios.get(url);
				const valores: Root[] = response.data.value;

				valores.sort((a: Root, b: Root) => {
					const dateA = new Date(a.Data);
					const dateB = new Date(b.Data);

					if (dateA < dateB) {
						return -1;
					}
					if (dateA > dateB) {
						return 1;
					}
					return 0;
				});

				if (valores.length) {
					const ultimo: Root = valores[valores.length - 1];

					for (const dado of valores) {
						const idCategoria = await this.getCategoria(dado.Categoria);

						if (idCategoria?.id) {
							const dinheiroEntity = await this.getDinheiro(
								idCategoria.id,
								dado.Denominacao
							);

							if (dinheiroEntity) {
								const [year, month, day] = dado.Data.split('-');
								const date = new Date(
									Number(year),
									Number(month) - 1,
									Number(day)
								);
								const circulacaoEntity = new Circulacao();
								circulacaoEntity.quantidade = dado.Quantidade;
								circulacaoEntity.valor = dado.Valor;
								circulacaoEntity.dinheiro = dinheiroEntity;
								circulacaoEntity.data = date;

								await this.setCirculacao(circulacaoEntity);
							}
						}
					}

					const filter = { _id: '64e271ac914014bf2bdb7ee4' };
					const update = {
						ultima: ultimo.Data,
						log: 'Atualizado com Sucesso'
					};

					const options = {
						new: true
					};

					const result = await Background.findOneAndUpdate(
						filter,
						update,
						options
					);

					if (result) {
						console.log('Documento atualizado:', result);
					} else {
						console.log('Documento não encontrado ou não atualizado.');
					}
				}
			}
		} catch (error) {
			console.error('Erro:', error);

			const filter = { _id: '64e271ac914014bf2bdb7ee4' };
			const update = {
				log: String(error)
			};

			const options = {
				new: true
			};

			const result = await Background.findOneAndUpdate(filter, update, options);

			if (result) {
				console.log('Documento atualizado:', result);
			} else {
				console.log('Documento não encontrado ou não atualizado.');
			}
		}
	}

	private async getCategoria(nomeCategoria: string) {
		return await categoria
			.createQueryBuilder('categoria')
			.select('categoria.id')
			.where('categoria.nome = :nome', { nome: nomeCategoria })
			.getOne();
	}

	private async getDinheiro(
		idCategoria: number,
		denominacao: string
	): Promise<Dinheiro | null> {
		return await dinheiro
			.createQueryBuilder('dinheiro')
			.where(
				'dinheiro.id_categoria = :id_categoria AND dinheiro.denominacao = :denominacao',
				{
					id_categoria: idCategoria,
					denominacao: parseFloat(denominacao)
				}
			)
			.getOne();
	}

	// Função para inserir a Circulacao
	private async setCirculacao(circulacaoEntity: Circulacao) {
		try {
			const repo = AppDataSource.getRepository(Circulacao);
			const res = await circulacao.save(circulacaoEntity);
			console.log('Dado inserido com sucesso!', res);
		} catch (error: any) {
			console.error('Erro ao inserir dados:', error.message);
			// Tratar erros como antes
		}
	}

	private getFullData() {
		const ontem = new Date();
		const day = ontem.getDate() - 1;
		const month = ontem.getMonth() + 1;
		const year = ontem.getFullYear();

		const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
			.toString()
			.padStart(2, '0')}`;

		console.log(formattedDate);

		return formattedDate;
	}
}

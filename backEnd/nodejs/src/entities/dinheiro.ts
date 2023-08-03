import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Especie } from "./especie";
import { Categoria } from "./categoria";
import { Circulacao } from "./circulacao";

@Entity({ schema: "movimentacao-dinheiro", name: "dinheiro" })
export class Dinheiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric", precision: 7, scale: 2, nullable: false })
  denominacao: number;

  @ManyToOne(() => Especie, { nullable: false })
  @JoinColumn({ name: "id_especie" })
  especie: Especie;

  @ManyToOne(() => Categoria, { nullable: true })
  @JoinColumn({ name: "id_categoria" })
  categoria: Categoria;

  @OneToMany(() => Circulacao, (circulacao) => circulacao.dinheiro) // Adicione esta linha
  circulacoes: Circulacao[]; // Adicione esta linha
}

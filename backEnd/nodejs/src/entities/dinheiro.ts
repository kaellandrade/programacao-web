import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Especie } from "./especie";
import { Categoria } from "./categoria";

@Entity("movimentacao-dinheiro.dinheiro")
export class Dinheiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric", precision: 7, scale: 2, nullable: false })
  denominacao: number;

  @ManyToOne(() => Especie, { nullable: false })
  especie: Especie;

  @ManyToOne(() => Categoria, { nullable: true })
  categoria: Categoria;
}

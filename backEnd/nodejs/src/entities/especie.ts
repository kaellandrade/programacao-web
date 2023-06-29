import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ schema: "movimentacao-dinheiro", name: "especie" })
export class Especie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;
}

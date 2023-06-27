import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movimentacao-dinheiro.categoria")
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100, nullable: false })
  nome: string;
}

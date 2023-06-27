import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("movimentacao-dinheiro.especie")
export class Especie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;
}

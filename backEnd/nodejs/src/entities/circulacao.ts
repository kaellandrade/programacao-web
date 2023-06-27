import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Dinheiro } from "./dinheiro";

@Entity("movimentacao-dinheiro.circulacao")
export class Circulacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "bigint", nullable: false })
  quantidade: number;

  @Column({ type: "numeric", precision: 20, scale: 2, nullable: false })
  valor: number;

  @ManyToOne(() => Dinheiro, { nullable: false })
  dinheiro: Dinheiro;

  @Column({ type: "date", nullable: true })
  data: Date;
}

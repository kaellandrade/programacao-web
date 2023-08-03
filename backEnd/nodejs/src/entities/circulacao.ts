import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dinheiro } from "./dinheiro";

@Entity({ schema: "movimentacao-dinheiro", name: "circulacao" })
export class Circulacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "bigint", nullable: false })
  quantidade: number;

  @Column({ type: "numeric", precision: 20, scale: 2, nullable: false })
  valor: number;

  @ManyToOne(() => Dinheiro, (dinheiro) => dinheiro.circulacoes) // Adicione o relacionamento aqui
  @JoinColumn({ name: "id_dinheiro" })
  dinheiro: Dinheiro;

  @Column({ type: "date", nullable: true })
  data: Date;
}

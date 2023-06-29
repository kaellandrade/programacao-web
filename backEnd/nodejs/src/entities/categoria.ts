import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ schema: "movimentacao-dinheiro", name: "categoria" })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100, nullable: false })
  nome: string;
}

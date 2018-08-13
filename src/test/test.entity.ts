import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Websites {
  // 自动增长的主列
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  alexa: number;

  @Column()
  country: string;
}
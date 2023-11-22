import { IgUser } from 'src/instagram/ig-user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  secret: string;

  @OneToOne(() => IgUser, { cascade: true })
  @JoinColumn()
  igUser: IgUser;
}

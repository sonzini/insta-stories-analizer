import { User } from 'src/users/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IgUser {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  externalId: string;

  @OneToOne(() => User, (user) => user.igUser)
  user: User;
}

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/user/user.entity/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 }) 
  name: string;

  @Column('text')
  description: string;

  @Column()
  isDone: boolean;

  @Column()
  image: string;

  @ManyToOne(() => UserEntity, user => user.tasks)
  user: UserEntity;
}

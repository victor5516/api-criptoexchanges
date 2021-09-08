import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50})
  first_name: string;

  @Column({ type: 'varchar', length: 50})
  last_name: string;

  @Column({ type: 'varchar'})
  password: string;

  @Column({ type: 'varchar', length: 50})
  document_id: string;

  
  @Column({ type: 'varchar', length: 50})
  email: string;

  @Column({ type: 'varchar' })
  profile_url: string;

  
  @Column({ type: 'varchar', length: 20 })
  phone: string;
}

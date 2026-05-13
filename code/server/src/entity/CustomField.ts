import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CustomField {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    label: string;

    @Column({ default: "lead" })
    entity: string;

    @Column({ default: "text" })
    type: string;
}

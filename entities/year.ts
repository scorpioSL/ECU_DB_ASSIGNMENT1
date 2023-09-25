import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Year' })
export class Year {

    @PrimaryGeneratedColumn()
    public YearId: number;

    @Column()
    public YearName: string;

    // exam schedule TODO
}

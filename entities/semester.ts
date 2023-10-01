import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Year } from "./year";

@Entity({ name: 'Semester' })
export class Semester {

    @PrimaryGeneratedColumn()
    public SemesterId: number;

    @Column()
    public SemesterName: string;

    @Column()
    public Duration: string;

    @ManyToOne(() => Year)
    @JoinColumn({ name: 'YearId' })
    public Year: Year;

}

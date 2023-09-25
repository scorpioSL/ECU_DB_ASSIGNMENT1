import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Semester' })
export class Semerster {

    @PrimaryGeneratedColumn()
    public SemesterId: number;

    @Column()
    public SemesterName: string;

    @Column()
    public Duration: string;

}

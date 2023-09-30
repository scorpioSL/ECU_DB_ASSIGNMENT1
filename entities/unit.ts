import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from "./enrollment";

@Entity({ name: 'Unit' })
export class Unit {

    // notify kavindu. added primary key column
    @PrimaryGeneratedColumn()
    public UnitId: number;

    @Column({ unique: true })
    public UnitCode: string;

    @Column()
    public Name: string;

    // notify kavindu. Unit coordinator is same as lecturer. removed lecturer

    @Column()
    public Description: string;

    @Column()
    public Duration: string;

    @Column()
    public Credits: string;

    @OneToMany(() => Enrollment, (enrollment) => enrollment.Unit)
    public Enrollments: Enrollment[];

}

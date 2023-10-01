import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student";
import { CampusSchool } from "./relations/campus-school";
import { Unit } from "./unit";
import { Mode } from "./mode";
import { Semester } from "./semester";

@Entity({ name: 'Enrollment' })
export class Enrollment {

    @PrimaryGeneratedColumn()
    public EnrollmentId: number;

    // Notify Kavindu
    @Column()
    public EnrollmentDateTime: Date;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'StudentId' })
    public Student: Student;

    @ManyToOne(() => CampusSchool)
    @JoinColumn({ name: 'CampusSchoolId' })
    public CampusSchool: CampusSchool;

    @ManyToOne(() => Unit)
    @JoinColumn({ name: 'UnitId' })
    public Unit: Unit;

    @ManyToOne(() => Mode)
    @JoinColumn({ name: 'ModeId' })
    public Mode: Mode;

    @ManyToOne(() => Semester)
    @JoinColumn({ name: 'SemesterId' })
    public Semester: Semester;
}

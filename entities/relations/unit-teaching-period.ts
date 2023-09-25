import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "../unit";
import { TeachingPeriod } from "../teaching-period";


@Entity({ name: 'UnitTeachingPeriod' })
export class UnitTeachingPeriod {

    @PrimaryGeneratedColumn()
    public UnitTeachingPeriodId: number;

    @OneToOne(() => Unit)
    @JoinColumn({ name: 'UnitId' })
    public Unit: Unit;

    @OneToOne(() => TeachingPeriod)
    @JoinColumn({ name: 'TeachingPeriodId' })
    public TeachingPeriod: TeachingPeriod;
}

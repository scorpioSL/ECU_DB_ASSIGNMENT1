import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "../unit";
import { Activity } from "../activity";

@Entity({ name: 'UnitActivity' })
export class UnitActivity {

    @PrimaryGeneratedColumn()
    public UnitActivityId: number;

    @OneToOne(() => Unit)
    @JoinColumn({ name: 'UnitId' })
    public Unit: Unit;

    @OneToOne(() => Activity)
    @JoinColumn({ name: 'ActivityId' })
    public Activity: Activity;
}
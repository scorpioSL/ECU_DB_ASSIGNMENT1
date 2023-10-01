import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from "../enrollment";
import { Activity } from "../activity";

@Entity({ name: 'EnrollmentActivity' })
export class EnrollmentActivity {

    @PrimaryGeneratedColumn()
    public EnrollmentActivityId: number;

    @ManyToOne(() => Enrollment)
    @JoinColumn({ name: 'EnrollmentId' })
    public Enrollment: Enrollment;

    @ManyToOne(() => Activity)
    @JoinColumn({ name: 'ActivityId' })
    public Activity: Activity;
}

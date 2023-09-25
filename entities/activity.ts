import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Activity' })
export class Activity {

    @PrimaryGeneratedColumn()
    public ActivityId: number;

    @Column()
    public ActivityName: string;

    @Column()
    public ActivityDescription: string;
}

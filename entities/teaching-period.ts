import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'TeachingPeriod' })
export class TeachingPeriod {

    @PrimaryGeneratedColumn()
    public TeachingPeriodId: number;

    @Column()
    public Name: string;

    @Column()
    public StartDate: Date;

    @Column()
    public EndDate: Date;

    @Column()
    public Description: string;
}

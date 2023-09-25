import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Student' })
export class Student {
    @PrimaryGeneratedColumn()
    public StudentId: number;

    @Column()
    public FirstName: string;

    @Column()
    public SurName: string;

    @Column()
    public TelephoneNo: string;

    @Column()
    public Email: string;

    @Column()
    public Country: string;

    @Column()
    public State: string;

    @Column()
    public PostCode: string;

    @Column()
    public Suburb: string;

    @Column()
    public AddressLine1: string;

    @Column()
    public AddressLine2: string;

    @Column()
    public Gender: string;

    @Column()
    public DOB: Date;
}

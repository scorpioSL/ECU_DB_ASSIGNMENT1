import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'School' })
export class School {
    @PrimaryGeneratedColumn()
    public ScoolId: number;

    @Column()
    public SchoolName: string;

    @Column()
    public SchoolDescription: string;

    @Column()
    public ContactPerson: string;

    @Column()
    public Email: string;

    @Column()
    public HeadOfTheSchool: string;

    @Column()
    public BuildingNo: string;
}

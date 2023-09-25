import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { School } from "../school";
import { Campus } from "../campus";

@Entity({ name: 'CampusSchool' })
export class CampusSchool {

    @PrimaryGeneratedColumn()
    public CampusSchoolId: number;


    @OneToOne(() => School)
    @JoinColumn({name:'SchoolId'})
    public School: School;

    @OneToOne(() => Campus)
    @JoinColumn({name:'CampusId'})
    public Campus: Campus;
}
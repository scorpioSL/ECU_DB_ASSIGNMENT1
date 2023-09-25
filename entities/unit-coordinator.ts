import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'UnitCoordinator' })
export class UnitCoordinator {

    @PrimaryGeneratedColumn()
    public UnitCoordinatorId: number;

    @Column()
    public FirstName: string;

    @Column()
    public Surname: string;

    @Column()
    public DOB: Date;

    @Column()
    public Gender: string;

    @Column()
    public AddressLine1: string;

    @Column()
    public AddressLine2: string;

    @Column()
    public Suburb: string;

    @Column()
    public PostCode: string;

    @Column()
    public State: string;

    @Column()
    public Country: string;

    @Column()
    public Email: string;

    @Column()
    public TelephoneNo: string;

}

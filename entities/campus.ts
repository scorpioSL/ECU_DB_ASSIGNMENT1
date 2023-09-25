import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Campus' })
export class Campus {

    @PrimaryGeneratedColumn()
    public CampusId: number;

    @Column()
    public Name: string;

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


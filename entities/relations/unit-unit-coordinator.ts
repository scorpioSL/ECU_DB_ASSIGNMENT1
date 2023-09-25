import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "../unit";
import { UnitCoordinator } from "../unit-coordinator";


@Entity({ name: 'UnitUnitCoordinator' })
export class UnitUnitCoordinator {

    @PrimaryGeneratedColumn()
    public UnitUnitCoordinatorId: number;


    @OneToOne(() => Unit)
    @JoinColumn({ name: 'UnitId' })
    public Unit: Unit;

    @OneToOne(() => UnitCoordinator)
    @JoinColumn({ name: 'UnitCoordinatorId' })
    public UnitCoordinator: UnitCoordinator;
}

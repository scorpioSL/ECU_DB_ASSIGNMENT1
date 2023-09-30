import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Unit } from "../unit";
import { Room } from "../room";


@Entity({ name: 'UnitRoom' })
export class UnitRoom {

    @PrimaryGeneratedColumn()
    public UnitRoomId: number;

    @OneToOne(() => Unit)
    @JoinColumn({ name: 'UnitId' })
    public Unit: Unit;

    @OneToOne(() => Room)
    @JoinColumn({ name: 'RoomId' })
    public Room: Room;
}

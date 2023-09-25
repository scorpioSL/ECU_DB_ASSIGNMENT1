import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeachingPeriod } from "../teaching-period";
import { Room } from "../room";

@Entity({ name: 'TeachingRoom' })
export class TeachingRoom {

    @PrimaryGeneratedColumn()
    public TeachingRoomId: number;

    @OneToOne(() => TeachingPeriod)
    @JoinColumn({ name: 'TeachingPeriodId' })
    public TeachingPeriod: TeachingPeriod;

    @OneToOne(() => Room)
    @JoinColumn({ name: 'RoomId' })
    public Room: Room;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Room' })
export class Room {

    @PrimaryGeneratedColumn()
    public RoomId: number;

    @Column()
    public RoomName: string;

    @Column()
    public Level: number;

    @Column()
    public Building: string;

    @Column()
    public Capacity: string;
}
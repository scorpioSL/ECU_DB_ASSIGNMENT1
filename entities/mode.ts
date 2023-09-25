import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Mode' })
export class Mode {
    @PrimaryGeneratedColumn()
    public ModeId: number;

    @Column()
    public ModeType: string;
}

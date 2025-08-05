import { ContactTag } from "src/contact-tag/entities/contact-tag.entity";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true})
    tagName: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=>ContactTag,(c)=>c.tag)
    contactTag:ContactTag

}

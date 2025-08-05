import { ContactTag } from "src/contact-tag/entities/contact-tag.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:255})
    contactName:string

    @Column({length:15,unique:true})
    contactNumber:string

    @CreateDateColumn()
    createdAt:Date

     @OneToMany(()=>ContactTag,(c)=>c.contact)
     contactTag:ContactTag

}

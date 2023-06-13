import {Entity, PrimaryGeneratedColumn, Column, ObjectId, ObjectIdColumn} from "typeorm"

@Entity()
export class User{
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}
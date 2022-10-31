import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


interface UserCreate{
    name: string,
    rank: number
}

@Table({tableName:"user"})
export class User extends Model<User, UserCreate>{
    @ApiProperty({example: 1})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'valentyn'})
    @Column({type: DataType.STRING})
    name: string

    @ApiProperty({example: 99})
    @Column({type: DataType.FLOAT})
    rank: number
}
import {ApiProperty} from "@nestjs/swagger";

export class UserDTO{
    @ApiProperty({example: 'valentyn'})
    readonly name
    @ApiProperty({example: 88})
    readonly rank
}
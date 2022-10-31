import {ApiProperty} from "@nestjs/swagger";

export class RankDTO{
    @ApiProperty({example: 33})
    readonly rank
}
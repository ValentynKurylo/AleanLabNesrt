import {Controller, Post, Body, Get, Patch, Param, Delete} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserDTO} from "./userDTO";
import {RankDTO} from "./rankDTO";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./user.model";

@ApiTags("Users")
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @ApiOperation({summary:'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    createUser(@Body() userDTO: UserDTO){
        return this.userService.CreateUser(userDTO)
    }

    @ApiOperation({summary:'Get All users'})
    @ApiResponse({status: 200, type: User})
    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @ApiOperation({summary:'Get All users by rank'})
    @ApiResponse({status: 200, type: User})
    @Get('/byRank')
    GetUserByRank(){
        return this.userService.getUsersByRank()
    }

    @ApiOperation({summary:'upDate rank of user'})
    @ApiResponse({status: 200, type: User})
    @Patch('/:id')
    patchUser(@Body() rank: RankDTO, @Param('id')id: number){
         return this.userService.PatchRank(id, rank)
    }

    @ApiOperation({summary:'upDate rank of user by name'})
    @ApiResponse({status: 200, type: User})
    @Patch('/byName/:name')
    patchUserByName(@Body() rank: RankDTO, @Param('name')name: string){
        return this.userService.PatchByName(name, rank)
    }

    @ApiOperation({summary:'upDate rank of user by rank'})
    @ApiResponse({status: 200, type: User})
    @Patch('/byRank/:rank')
    patchUserByRank(@Body() rankDTO: RankDTO, @Param('rank')rank: number){
        return this.userService.PatchByRank(rank, rankDTO)
    }

    @ApiOperation({summary:'delete user'})
    @ApiResponse({status: 200, type: User})
    @Delete('/:id')
    deleteUser(@Param('id')id: number){
        return this.userService.DeleteUser(id)
    }

    @ApiOperation({summary:'delete user by name'})
    @ApiResponse({status: 200, type: User})
    @Delete('/byName/:name')
    deleteUserByName(@Param('name')name: string){
        return this.userService.DeleteUserByName(name)
    }

    @ApiOperation({summary:'delete user by rank'})
    @ApiResponse({status: 200, type: User})
    @Delete('/byRank/:rank')
    deleteUserByRank(@Param('rank')rank: number){
        return this.userService.DeleteUserByRank(rank)
    }
}

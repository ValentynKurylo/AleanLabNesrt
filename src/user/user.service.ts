import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {UserDTO} from "./userDTO";
import {RankDTO} from "./rankDTO";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async CreateUser(user: UserDTO){
        const u = await this.userRepository.create(user)
        return u
    }

    async getUsers(){
        const users = await this.userRepository.findAll()
        return users
    }

    async getUsersByRank(){
        const users = await this.userRepository.findAll({order: ['rank']})
        return users
    }

    async PatchRank(id: number, rank: RankDTO){
        const user = await this.userRepository.update(rank, {where: {id: id}})
        return user
    }

    async PatchByName(name: string, rank: RankDTO){
        const user = await this.userRepository.update(rank, {where: {name: name}})
        return user
    }

    async PatchByRank(rank: number, rankDTO: RankDTO){
        const user = await this.userRepository.update(rankDTO, {where: {rank: rank}})
        return user
    }

    async DeleteUser(id: number) {
        const user = await this.userRepository.destroy({where: {id: id}})
        return user
    }

    async DeleteUserByName(name: string) {
        const user = await this.userRepository.destroy({where: {name: name}})
        return user
    }

    async DeleteUserByRank(rank: number){
        const user = await this.userRepository.destroy({where: {rank: rank}})
        return user
    }


}

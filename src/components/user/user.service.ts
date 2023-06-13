import {Inject, Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create.user.dto";
import {Repository} from "typeorm";
import {User} from "./entity/user.entity";

@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY')
                private userRepository: Repository<User>,) {
    }

    async createUser(createUserDto: CreateUserDto) {
        return this.userRepository.insert(createUserDto);
    }

}

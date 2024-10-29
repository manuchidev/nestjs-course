import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {
        return this.prisma.user.create({ data: user});
    }
    
    // private users: any[] = [
    //     {
    //         id: 1,
    //         name: 'Jhon Doe',
    //         phone: '1234567890'
    //     },
    //     {
    //         id: 2,
    //         name: 'Jane Doe',
    //         phone: '0987654321'
    //     }
    // ]

    // getUsers() {
    //     return this.users;
    // }

    // createUser(user: CreateUserDto) {

    //     this.users.push(user);

    //     return {
    //         ...user,
    //         id: this.users.length + 1,
    //     };
    // }

}

// src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.serivce';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string[] {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body('name') name: string) {
    this.usersService.addUser(name);
    return { message: 'User added successfully' };
  }
}

// src/users/users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['Rimsha', 'Maham', 'Nawal'];

  findAll(): string[] {
    return this.users;
  }

  addUser(name: string) {
    this.users.push(name);
  }
}

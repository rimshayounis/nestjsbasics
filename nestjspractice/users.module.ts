// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.serivce';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

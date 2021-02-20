import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Membership } from './entity/memberships.entity';
import { MembershipsService } from './memberships.service';

@Controller('memberships')
export class MembershipsController {
  constructor(private readonly membershipSercie: MembershipsService) {}

  @Get()
  getMembership() {
    return this.membershipSercie.getMembership();
  }

  @Post()
  createMembership() {
    return this.membershipSercie.createMembership();
  }

  @Put()
  updateMembership() {
    return this.membershipSercie.updateMembership();
  }

  // @Delete()
}

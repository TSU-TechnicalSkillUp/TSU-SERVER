import { Request, Body, Controller, Delete, Get, Post, Put, UseGuards, Inject, forwardRef } from '@nestjs/common';
import { Membership } from './entity/memberships.entity';
import { MembershipsService } from './memberships.service';
import { JwtAuthGuard } from '../auth/jwt.authguard'
import { AuthService} from '../auth/auth.service';

@Controller('memberships')
export class MembershipsController {
  constructor(
    @Inject(forwardRef (() => AuthService))
    private authService: AuthService,
    private readonly membershipService: MembershipsService
    ) {}

  @Get('gettoken')
  getToekn(@Request() req){
    const access_token = this.authService.makeAccessToken(req.body.email);
    return access_token;
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getMembership(@Request() req) {
    // console.log(this.membershipService.getMembership(req.body.email));
    return this.membershipService.getMembership(req.body.email);
  }

  @Post()
  createMembership() {
    return this.membershipService.createMembership();
  }

  @Put()
  updateMembership() {
    return this.membershipService.updateMembership();
  }y

  

  // @Delete()
}

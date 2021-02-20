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
    return this.membershipService.getMembership(req.body.email);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createMembership(@Request() req) {
    return this.membershipService.createMembership(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  updateMembership(@Request() req) {
    return this.membershipService.updateMembership(req.body);
  }

  

  // @Delete()
}

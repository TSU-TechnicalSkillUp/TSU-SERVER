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

  @UseGuards(JwtAuthGuard)
  @Get()
  getMembership(@Request() req) {
    this.membershipService.checkMembership(req.body.email).then(result => {
      if(result === 0){
        // 회원가입
      }
      else{
        // 로그인
      }
    })
    return this.membershipService.getMembership(req.body.email);
  }

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

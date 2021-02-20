import { Controller, forwardRef, Get, Inject, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  @Get()
  getToekn(@Request() req){
    const access_token = this.authService.makeAccessToken(req.body.email);
    return access_token;
  }
}

import { forwardRef,Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { MembershipsModule } from '../memberships/memberships.module';
import { AuthController } from './auth.controller';
@Module({
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
    imports: [
        PassportModule,
        forwardRef(() => MembershipsModule),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' },
        })
    ],
    controllers: [AuthController],
})
export class AuthModule { }

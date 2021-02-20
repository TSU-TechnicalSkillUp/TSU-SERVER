import { forwardRef, Injectable, Inject } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { Membership } from '../memberships/entity/memberships.entity';
import { MembershipsService } from '../memberships/memberships.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => MembershipsService))
        private readonly membershipsService: MembershipsService,
        private readonly jwtService: JwtService,
    ) { }

    async validateAccount(payload: JwtPayload): Promise<any> {
        const membership: Membership = await this.membershipsService.findOneByEmail(payload.email);
        if ((await this.membershipsService.getMembership(payload.email)).email === payload.email) {
            const { ...result } = membership;
            return result;
        }
        return null;
    }

    makeAccessToken(email: string) {
        return this.jwtService.sign({ 'email': email });
    }
}

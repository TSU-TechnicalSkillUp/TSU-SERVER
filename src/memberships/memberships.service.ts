import { Injectable } from '@nestjs/common';
import { Membership } from './entity/memberships.entity';

@Injectable()
export class MembershipsService {
  private memberships: Membership[] = [];

  getMembership() {
    //TODO
    return "This will get membership";
  }

  createMembership() {
    //TODO
    return "This will create membership";
  }

  updateMembership() {
    //TODO
    return "This will update membership";
  }
}

import { Injectable } from '@nestjs/common';
import { Membership } from './entity/memberships.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MembershipsService {
  constructor(
    @InjectRepository(Membership)
    private memberRepository: Repository<Membership>,
  ) { }

  getMembership(email: string): Promise<Membership> {
    //TODO
    return (
      this.memberRepository
      .createQueryBuilder('membership')
      .where('membership.email = :email', { email: email })
      .getOne()
    );
  }

  createMembership() {
    //TODO
    return "This will create membership";
  }

  updateMembership() {
    //TODO
    return "This will update membership";
  }

  findOneByEmail(email: string) : Promise<any>{
    return (
      this.memberRepository
        .createQueryBuilder('membership')
        .where('membership.email = :email', { email: email })
        .getOne()
    )
  }
}

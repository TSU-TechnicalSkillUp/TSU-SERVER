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

  async createMembership(membership: Membership): Promise<void> {
    await this.memberRepository.save(membership);
  }

  async updateMembership(membership: Membership): Promise<void> {
    const membershipNew = await this.memberRepository.findOne(membership.email);
    membershipNew.career = membership.career;
    membershipNew.interestTech = membership.interestTech;
    membershipNew.techStack = membership.techStack;
    await this.memberRepository.save(membershipNew);
  }

  findOneByEmail(email: string) : Promise<any>{
    return (
      this.memberRepository
        .createQueryBuilder('membership')
        .where('membership.email = :email', { email: email })
        .getOne()
    )
  }

  checkMembership(email: string){
    return(
      this.memberRepository
      .createQueryBuilder('membership')
      .where('membership.email = :email', {email: email})
      .getCount()
    )
  }
}

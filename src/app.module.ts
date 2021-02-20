import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembershipsController } from './memberships/memberships.controller';
import { MembershipsService } from './memberships/memberships.service';
import { MembershipsModule } from './memberships/memberships.module';

@Module({
  imports: [MembershipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

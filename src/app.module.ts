import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MembershipsController } from './memberships/memberships.controller';
// import { MembershipsService } from './memberships/memberships.service';
import { MembershipsModule } from './memberships/memberships.module';
// import { AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MembershipsModule,
    // AuthModule,
    TypeOrmModule.forRoot(),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

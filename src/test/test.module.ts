import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Websites } from './websites.entity';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Websites])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {

}
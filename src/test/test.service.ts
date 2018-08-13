import { InjectRepository } from '@nestjs/typeorm';
import { Websites } from './test.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(@InjectRepository(Websites)
              private websitesRepository: Repository<Websites>) {
  }

  public getInfo(): object {
    return {
      code: 0,
      data: '测试数据',
    };
  }

  public async findAll(): Promise<Websites[]> {
    return await this.websitesRepository.find();
  }
}

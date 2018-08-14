import { InjectRepository } from '@nestjs/typeorm';
import { Websites } from './websites.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(@InjectRepository(Websites)
              private websitesRepository: Repository<Websites>) {
  }

  // 返回一条结果
  public async findWebsiteById(id: string): Promise<Websites> {
    return await this.websitesRepository.findOne();
  }

  // 返回所有的
  public async findAll(): Promise<Websites[]> {
    return await this.websitesRepository.find();
  }
}

// 这里不仅能返回Promise，还能返回Observe对象，具体参考官方API
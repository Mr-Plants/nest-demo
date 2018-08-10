import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  public getInfo(): object {
    return {
      code: 0,
      data: '测试数据',
    };
  }
}

import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  resolve(token: string): MiddlewareFunction {
    return (req, res, next) => {
      console.log('进入test中间件');
      next();
    };
  }

}

// 中间件需要实现NestMiddleware接口，返回MiddlewareFunction
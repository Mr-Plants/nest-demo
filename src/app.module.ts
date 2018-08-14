import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMiddleware } from './common/middlewares/test.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TestModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(TestMiddleware)
      .forRoutes('/test');
    // .forRoutes(...['/test', '/app']);  // 多个路由
  }
}

// 使用中间件的模块需要实现NestModule接口，在configure函数中传入中间件用户，apply和forRoutes方法都可以传入数组
// ，具体类型可以进入接口定义查看。中间件传递参数，异步中间件，函数式中间件，全局中间件可以查看官方文档
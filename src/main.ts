import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

// 整个程序入口文件
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // 总结一个坑，这里最好不要使用webpack热更新，否则使用typeorm会报错
  // if (module.hot) {
  //   console.log('module' + module);
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }
}

bootstrap();

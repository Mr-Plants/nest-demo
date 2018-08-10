import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

// 整个程序入口文件
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    console.log('module' + module);
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();

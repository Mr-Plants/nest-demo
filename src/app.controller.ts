import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private appService: AppService) {
  }

  @Get()
  root(): string {
    return this.appService.root();
  }
}

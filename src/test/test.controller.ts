import { Controller, Get, Post, Headers, Req, Query, Param, Body } from '@nestjs/common';
import { TodoInfo } from './dto/todoInfo.dto';
import { TestService } from './test.service';

// @Controller('api/test')
@Controller('test')
export class TestController {
  constructor(private testService: TestService) {
  }

  @Get(':id')
  gogogo(@Headers() header, @Req() req, @Param() params): object {
    console.log(params);
    // Header：请求头
    // Param：{}未知
    // Req：大对象

    return this.testService.getInfo();
  }

  @Get()
  getAll(@Query() qur: object): string {
    // Query：请求参数  @Query('id')可以加参数来限制具体参数
    console.log(qur);
    return '1222';
  }

  @Post()
  wyb(@Body() todoInfo: TodoInfo): string {
    console.log(todoInfo);
    // Body：请求体
    return '121';
  }
}

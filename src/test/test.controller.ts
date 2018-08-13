import { Controller, Get, Post, Headers, Req, Query, Param, Body, Put, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { TodoInfo } from './dto/todoInfo.dto';
import { TestService } from './test.service';
import { Connection } from 'typeorm';
import { Websites } from './test.entity';

// @Controller('api/test')
@Controller('test')
export class TestController {
  constructor(private testService: TestService, private connection: Connection) {
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
  getAll(@Query() qur: object): Promise<Websites[]> {
    // Query：请求参数  @Query('id')可以加参数来限制具体参数
    console.log(qur);
    return this.testService.findAll();
  }

  @Post()
  wyb(@Body() todoInfo: TodoInfo): string {
    console.log(todoInfo);
    // Body：请求体
    return '121';
  }

  @Put()
  putAction(): string {
    // throw new HttpException('forbidden-无权访问', HttpStatus.FORBIDDEN);  // 可以传入参数或配置对象
    throw new ForbiddenException();   // 使用官方封装好的一些状态方法
  }
}

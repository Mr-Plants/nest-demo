import { Controller, Get, Post, Headers, Req, Query, Param, Body, Put, HttpException, HttpStatus, ForbiddenException } from '@nestjs/common';
import { TodoInfo } from './dto/todoInfo.dto';
import { TestService } from './test.service';
import { Connection } from 'typeorm';
import { Websites } from './websites.entity';

// @Controller('api/test')  // 此处可以
@Controller('test')
export class TestController {
  constructor(private testService: TestService, private connection: Connection) {
  }

  // 一般回显某条数据用这个方法
  @Get(':id')
  findWebsiteById(@Param() params): Promise<Websites> {
    // @Param：斜杠'/'后面添加的参数转换的对象，可以在装饰器中加参数来过滤如@Param('id)
    console.log(params);
    return this.testService.findWebsiteById(params.id);
  }

  //
  @Get()
  getAll(@Query() query): Promise<Websites[]> {
    // Query：'?'后的请求参数组成的对象  @Query('id')可以加参数来限制具体参数
    console.log(query);
    return this.testService.findAll();
  }

  @Post()
  wyb(@Body() todoInfo: TodoInfo): string {
    console.log(todoInfo);
    // Body：请求体
    return '121';
  }

  // 一般编辑数据用这个
  @Put()
  putAction(): string {
    // throw new HttpException('forbidden-无权访问', HttpStatus.FORBIDDEN);  // 可以传入参数或配置对象
    throw new ForbiddenException();   // 使用官方封装好的一些状态方法
  }

  // 其他可添加的装饰器
  // @Header：请求头
  // @Req：详细的请求对象，数据量较大
}

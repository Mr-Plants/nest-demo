/*
  首先, 我们需要确定 DTO (数据传输对象) 架构。DTO 是一个定义如何通过网络发送数据的对象。
  我们可以使用 TypeScript 接口或简单的类来完成。令人惊讶的是，我们建议在这里使用类。为什么？
  这些类是 JavaScript ES6 标准的一部分, 所以它们只是简单的函数。另一方面, TypeScript 接口在编译过程中被删除,
  Nest 不能引用它们。这一点很重要, 因为管道等特性能够在访问变量的元类型时提供更多的可能性。
*/

import { IsString } from 'class-validator';

export class TodoInfo {
  @IsString() readonly name: string;
  @IsString() readonly password: string;
}
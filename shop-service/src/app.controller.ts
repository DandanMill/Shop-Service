import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('app')
export class AppController {
  @Get()
  hello(@Req() request: Request): string {
    return 'hello' + request['user']?.email + '!';
  }
}

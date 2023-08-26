import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import * as firebase from 'firebase-admin';

@Controller('app')
export class AppController {
  @Get()
  async hello(@Req() request: Request): Promise<object> {
    const user = await firebase.auth().getUser('9vSUy3b7FWbdCD9zL1QWfc3JSAo2');
    return user.toJSON();
  }
}

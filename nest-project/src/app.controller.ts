import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

import { Colour } from '@shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('color') color: Colour): string {
    console.log({ color });
    return this.appService.getHello();
  }
}

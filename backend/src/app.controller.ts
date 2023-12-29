import { Controller, Get, Res,} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(){
    return 'Hello World!';
  }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getServerHealthInfo(): string {
    return 'Hey, listen!';
  }
}

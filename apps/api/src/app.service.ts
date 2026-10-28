import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHelloWorld(): string {
    return 'Hello World!';
  }

  getServerHealthInfo(): string {
    return 'Hey, Listen!';
  }
}

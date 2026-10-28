import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getServerHealthInfo(): string {
    return 'Hey, Listen!';
  }
}

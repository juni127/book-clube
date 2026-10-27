import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getServerHealthInfo(): string {
    throw new NotImplementedException();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '도커 CI/CD 성공!!!';
  }
}

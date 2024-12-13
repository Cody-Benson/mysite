import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendEmail( firstName:string, lastName:string, email:string, message:string): string {
    return 'email sent!';
  }
}

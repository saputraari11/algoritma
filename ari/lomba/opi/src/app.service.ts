import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
}

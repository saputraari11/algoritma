import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getBnb():Promise<any>{
    const result = await axios.get("https://indodax.com/api/bnb_idr/ticker")
    const data = {data:result.data}
   return data
  }
}

import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class FfbService {
  constructor(
    private readonly http: HttpService,
    @Inject('QUERY') private client: ClientProxy,
  ) {}

  async findAllSite(payload): Promise<any> {
    try {
      const pattern = { cmd: 'QUERY' };

      const res = await this.client.send<number>(pattern, payload);

      return res;
    } catch (err) {
      return err;
    }
  }
}

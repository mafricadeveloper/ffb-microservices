import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FfbService } from './ffb.service';

@Controller()
export class FfbController {
  constructor(private readonly ffbService: FfbService) {}

  @MessagePattern({ cmd: 'QUERY' })
  async findAllSite(data: any) {
    return await this.ffbService.findAllSite(data);
  }
}

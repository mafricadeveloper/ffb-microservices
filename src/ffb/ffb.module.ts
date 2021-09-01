import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FfbController } from './ffb.controller';
import { FfbService } from './ffb.service';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'QUERY',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8876,
        },
      },
    ]),
  ],
  providers: [FfbService],
  controllers: [FfbController],
})
export class FfbModule {}

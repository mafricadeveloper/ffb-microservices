import { Module } from '@nestjs/common';
import { FfbModule } from './ffb/ffb.module';

@Module({
  imports: [FfbModule]
})
export class AppModule {}

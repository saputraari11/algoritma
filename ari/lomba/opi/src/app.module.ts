import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {kurirModuler } from './kurir/kurirs.modul';

@Module({
  imports: [kurirModuler],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

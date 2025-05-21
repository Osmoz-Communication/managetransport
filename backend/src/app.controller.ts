// backend/src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello-from-backend') // Nouvelle route
  getHelloFromBackend(): { message: string } {
    return { message: 'Bonjour du backend NestJS !' };
  }
}
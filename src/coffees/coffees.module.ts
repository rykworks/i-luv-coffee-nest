import { Module } from '@nestjs/common';
import { CoffeesController } from './coffee.controller.js';
import { CoffeesService } from './coffees.service.js';

@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}

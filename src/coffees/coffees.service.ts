import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity.js';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavor: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`This coffee with #${id} isn't found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, createCoffeeDto: any) {
    const existingOne = this.findOne(id);

    if (existingOne) {
      //update it
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);

    if (coffeeIndex !== -1) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}

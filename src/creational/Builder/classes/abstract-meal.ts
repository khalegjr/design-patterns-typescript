import { MealCompositeProtocol } from './../interfaces/meal-composite-protocols';

export abstract class AbstractMeal implements MealCompositeProtocol {
  constructor(private name: string, private price: number) {}

  getPrice(): number {
    return this.price;
  }
}

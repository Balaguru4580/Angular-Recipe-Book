import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoplistService {

  ingredientTube = new EventEmitter<{name: string, amount: number}>();

  ingredientChanges =  new EventEmitter<Ingredient[]>();

  
  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Chimken', 20),
  ];

  
  temp: Ingredient;



  deliver(ingredient)
  {
    this.temp = new Ingredient(ingredient.name, ingredient.amount);
    this.ingredients.push(this.temp);
    this.ingredientChanges.emit(this.ingredients.slice());
  }

  accessList(){
    return this.ingredients.slice();
  }

  constructor() { }

  addIngredients(local_name: string, local_amount: number){

    this.ingredientTube.emit({name: local_name, amount: local_amount});
  }
}

import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoplistService {
  ingredientChanges =  new EventEmitter<Ingredient[]>();

  
  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Chimken', 20),
  ];

  accessList(){
    return this.ingredients.slice();
  }


  addIngredients(local_name: string, local_amount: number){
    this.ingredients.push(new Ingredient(local_name, local_amount));
    this.ingredientChanges.emit(this.ingredients.slice());
  }
}

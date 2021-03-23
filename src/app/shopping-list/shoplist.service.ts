import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoplistService {
  ingredientChanges =  new Subject<Ingredient[]>();

  
  private ingredients: Ingredient[] = [
    new Ingredient('Brimstone', 10),
    new Ingredient('Chimken', 20),
  ];

  accessList(){
    return this.ingredients.slice();
  }


  addIngredients(local_name: string, local_amount: number){
    this.ingredients.push(new Ingredient(local_name, local_amount));
    this.ingredientChanges.next(this.ingredients.slice());
  }
}

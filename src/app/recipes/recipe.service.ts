import { Injectable } from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoplistService} from '../shopping-list/shoplist.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


 private recipes: Recipe[] = [
    new Recipe("Hotdog", "American", "https://img.freepik.com/free-vector/fast-food-sticker-design-with-hot-dog-isolated_1308-67129.jpg?w=900&t=st=1686752290~exp=1686752890~hmac=fe7e0aad5102bab5cc8003f4a4680f2a5da6011a5227740b2dffa97a79ebbdc9",[
      new Ingredient('Bread', 1),
      new Ingredient('Sausage', 1)
    ]),
    new Recipe("Biriyani", "Indian", "https://img.freepik.com/free-vector/hand-drawn-chicken-biryani_23-2148731816.jpg?w=740&t=st=1686752327~exp=1686752927~hmac=5c0f0ab9c58ce0b01b4992d8624ecbc7bf39644d8b566b38e8f3c1b4625c5c5f",[
      new Ingredient('Rice', 1),
      new Ingredient('Chicken', 2),
      new Ingredient('Cloves', 3),
    ])
  ];

  constructor(private shopserv: ShoplistService){};

  accessRecipe()
  {
    return this.recipes.slice();
  }

  recipeKick(kick: Recipe){
    kick.recipe__ingredients.forEach(element => {

      this.shopserv.addIngredients(element.name, element.amount);

        
      });
    
  }

  accessID(id: number){
    return this.recipes[id];
  }
}

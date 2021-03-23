import { Injectable } from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoplistService} from '../shopping-list/shoplist.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


 private recipes: Recipe[] = [
    new Recipe("Angular", "Google's Framework", "https://cdn.worldvectorlogo.com/logos/angular-icon.svg",[
      new Ingredient('Corporate level', 2),
      new Ingredient('High performance', 1)
    ]),
    new Recipe("React", "Facebook Frame", "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",[
      new Ingredient('Library based', 2),
      new Ingredient('Much smaller and easier', 1)
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

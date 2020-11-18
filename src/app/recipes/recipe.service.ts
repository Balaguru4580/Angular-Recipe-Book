import { Injectable } from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoplistService} from '../shopping-list/shoplist.service'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


 private recipes: Recipe[] = [
    new Recipe("Sambar", "Basic indian JUICE", "https://previews.123rf.com/images/indianfoodimages/indianfoodimages1811/indianfoodimages181100940/111855004-drumstick-curry-or-shevga-sheng-bhaji-or-south-indian-sambar-served-in-a-bowl-over-moody-background-.jpg",[
      new Ingredient('Drumstix', 2),
      new Ingredient('Sambar powder lol', 1)
    ]),
    new Recipe("Biriyani", "YUMMY RICE YAY", "https://c.ndtvimg.com/2018-10/ohqcobr_handi-biryani_625x300_08_October_18.jpg",[
      new Ingredient('Chicki', 2),
      new Ingredient('Biriyani masoula', 1)
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

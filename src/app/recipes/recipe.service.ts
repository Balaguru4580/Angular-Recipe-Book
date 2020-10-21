import { Injectable } from '@angular/core';
import {Recipe} from './recipe-list/recipe.model';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeFocus = new EventEmitter<{detail: boolean, recipe: Recipe }>();

 private recipes: Recipe[] = [
    new Recipe("Sambar", "Basic indian JUICE", "https://previews.123rf.com/images/indianfoodimages/indianfoodimages1811/indianfoodimages181100940/111855004-drumstick-curry-or-shevga-sheng-bhaji-or-south-indian-sambar-served-in-a-bowl-over-moody-background-.jpg")
  ];

  constructor() { }

  accessRecipe()
  {
    return this.recipes.slice();
  }
}

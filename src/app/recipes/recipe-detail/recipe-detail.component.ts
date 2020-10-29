import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoplistService} from '../../shopping-list/shoplist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipepass: RecipeService) { 
  }
  recipePass(recipe: Recipe){
    this.recipepass.recipeKick(recipe);

  }
  ngOnInit(): void {
  
  }

}

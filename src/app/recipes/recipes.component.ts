import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipepull: RecipeService) { }


  Recipelist_final: Recipe;
  focus: boolean = false;


  focuser(duo)
  {
    this.focus = duo.detail;
    this.Recipelist_final = duo.recipe;

  }


  ngOnInit(){
    this.recipepull.recipeFocus.subscribe(
      (x: {details: boolean, recipes: Recipe}) =>  this.focuser(x) ) //OBJECT CAME ALL MESSED UP!
    
  }

}

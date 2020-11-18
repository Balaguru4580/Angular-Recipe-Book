import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = this.recipepull.accessRecipe();

  

  constructor(private recipepull: RecipeService,
      private router: Router, private current: ActivatedRoute) {}

  recipeAdd(){
    this.router.navigate(['new'], {relativeTo: this.current});
  }

  ngOnInit(): void {
  }

}

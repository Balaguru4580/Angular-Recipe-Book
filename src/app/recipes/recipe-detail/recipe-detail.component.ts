import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  RecipeID: number;

  recipe: Recipe;



  constructor(private recipepass: RecipeService, private IDroute: ActivatedRoute, private router: Router) {
  }

  recipePass(recipe: Recipe) {
    this.recipepass.recipeKick(recipe);

  }



  ngOnInit() {

    this.IDroute.params.subscribe(
      (x: Params) => {this.RecipeID = +x['id']; this.recipe = this.recipepass.accessID(this.RecipeID);}
    )

  }

  recipeEdit(){
    this.router.navigate(['../', this.RecipeID, 'edit'], {relativeTo: this.IDroute});
  }

}

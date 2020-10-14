import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  indetail: boolean = false;

  @Input('item_recipe') recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  detailer()
  {
    this.indetail = !this.indetail;
    this.recipeService.recipeFocus.emit({detail: this.indetail, recipe: this.recipe});
  }

  ngOnInit(): void {
  }

}

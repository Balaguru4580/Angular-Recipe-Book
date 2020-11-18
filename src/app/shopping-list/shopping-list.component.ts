import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoplistService } from '../shopping-list/shoplist.service';
import { ShopEditComponent } from './shop-edit/shop-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  publicIngredients: Ingredient[];
  constructor(private shoppee: ShoplistService) { };
  
  private ingChange;

  ngOnInit(): void {
    this.publicIngredients = this.shoppee.accessList();
     
    this.ingChange = this.shoppee.ingredientChanges.subscribe(
      (y: Ingredient[]) => {
      this.publicIngredients = y;
      }
    )
  }

  ngOnDestroy(): void
  {
    this.ingChange = this.shoppee.ingredientChanges.unsubscribe();  
  }

}

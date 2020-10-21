import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadcompComponent } from './headcomp/headcomp.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopEditComponent } from './shopping-list/shop-edit/shop-edit.component';
import { Dropowndirective } from './shared/dropdown.directive';
import { ShoplistService } from './shopping-list/shoplist.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadcompComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShopEditComponent,
    Dropowndirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ShoplistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

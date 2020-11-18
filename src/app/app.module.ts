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
import { AppRouterModule } from './approuter.module';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
import { RecipeEditorComponent } from './recipes/recipe-editor/recipe-editor.component';


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
    RecipeStarterComponent,
    RecipeEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
  ],
  providers: [ShoplistService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

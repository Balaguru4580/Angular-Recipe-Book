import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditorComponent } from './recipes/recipe-editor/recipe-editor.component';

const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path:'shoplist', component: ShoppingListComponent},
    {path: 'recipes', component: RecipesComponent, 
    children: [
    {path:'new', component: RecipeEditorComponent}, 
    {path:':id', component:RecipeDetailComponent},
    {path:':id/edit', component: RecipeEditorComponent}
    ]}]; 


@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRouterModule{}
import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe{
    public recipe__name: string;
    public recipe__description: string;
    public recipe__imagePath: string;
    public recipe__ingredients: Ingredient[];


    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]){
        this.recipe__name = name;
        this.recipe__description = description;
        this.recipe__imagePath = imagePath;
        this.recipe__ingredients = ingredients;
    }
}
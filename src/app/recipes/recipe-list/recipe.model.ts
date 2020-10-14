export class Recipe{
    public recipe__name: string;
    public recipe__description: string;
    public recipe__imagePath: string;


    constructor(name: string, description: string, imagePath: string){
        this.recipe__name = name;
        this.recipe__description = description;
        this.recipe__imagePath = imagePath;
    }
}
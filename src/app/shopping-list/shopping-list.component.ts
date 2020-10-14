import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  temp: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Chimken', 20),
  ];

  deliver(ingredient)
  {
    this.temp = new Ingredient(ingredient.name, ingredient.amount);
    this.ingredients.push(this.temp);
    console.log(this.ingredients); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  @ViewChild ('nameInput', {static: true}) local_name: ElementRef;

  @ViewChild ('amountInput', {static: true}) local_amount: ElementRef;

  @Output() ingredientTube = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  addIngredients(){

    this.ingredientTube.emit({name: this.local_name.nativeElement.value, amount: this.local_amount.nativeElement.value});
  }
  ngOnInit(): void {
  }

}

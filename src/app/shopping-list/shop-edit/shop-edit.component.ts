import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoplistService } from '../shoplist.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  @ViewChild ('nameInput', {static: true}) local_name: ElementRef;

  @ViewChild ('amountInput', {static: true}) local_amount: ElementRef;


  constructor(private shopper: ShoplistService) { }

  
  ngOnInit(): void {
  }

  addIngredients(){
    let x = this.local_name.nativeElement.value;
    let y  = this.local_amount.nativeElement.value;
    this.shopper.addIngredients(x,y);
}
}

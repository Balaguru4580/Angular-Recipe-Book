
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoplistService } from '../shoplist.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit, OnDestroy {

  @ViewChild('formRef', { static: false }) shoplistForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  selectedIndex: number;
  editedItem: Ingredient;

  constructor(private shopper: ShoplistService) { }


  ngOnInit(): void {
    this.subscription = this.shopper.editStart.subscribe((index: number) => {
      this.editMode = true;
      this.selectedIndex = index;
      this.editedItem = this.shopper.getIngredient(index);
      this.shoplistForm.setValue({ name: this.editedItem.name, amount: this.editedItem.amount })

    })
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shopper.updateIngredient(this.selectedIndex, newIngredient);
    }
    else { this.shopper.addIngredients(value.name, value.amount); }
    this.editMode = false;
    form.reset();
  }


  onClear(){
    this.shoplistForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shopper.deleteIngredient(this.selectedIndex);
  }

}
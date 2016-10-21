import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>Record a new Meal</h3>
    <div class="form-group">
      <label>Food: </label>
      <input class="form-control" #newFood>
    </div>
    <div class="form-group">
      <label>Description: </label>
      <input class="form-control" #newDesc>
    </div>
    <div class="form-group">
      <label>Calories: </label>
      <input class="form-control" #newCal>
    </div>
    <div>
      <button (click)="
        addClicked(newFood.value, newDesc.value, newCal.value);
        newFood.value='';
        newDesc.value='';
        newCal.value='';
        ">Add</button>
    </div>
  `
})

export class NewMealComponent {


}

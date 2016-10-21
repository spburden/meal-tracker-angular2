import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "new-meal",
  template: `
    <h3>Record a new Meal</h3>
    <div class="form-group">
      <label>Food: </label>
      <input class="form-control" type="text" #newFood>
    </div>
    <div class="form-group">
      <label>Description: </label>
      <input class="form-control" type="text" #newDesc>
    </div>
    <div class="form-group">
      <label>Calories: </label>
      <input class="form-control" type="number" #newCal>
    </div>
    <div>
      <button class="btn btn-success" (click)="
        addClicked(newFood.value, newDesc.value, newCal.value);
        newFood.value='';
        newDesc.value='';
        newCal.value='';
        ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(food: string, description: string, calories: number) {
    var newMealToAdd: Meal = new Meal(food, description, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}

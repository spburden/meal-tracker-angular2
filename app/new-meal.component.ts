import { Component, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "new-meal",
  template: `
    <h3>Record a new Meal</h3>
    <div class="form-group">
      <label>Food: </label>
      <input required class="form-control" type="text" #newFood>
    </div>
    <div class="form-group">
      <label>Description: </label>
      <input required class="form-control" type="text" #newDesc>
    </div>
    <div class="form-group">
      <label>Calories: </label>
      <input required class="form-control" type="number" #newCal>
    </div>
    <div>
      <button class="btn btn-success" (click)="
        addClicked(newFood.value, newDesc.value, newCal.value);
        newFood.value='';
        newDesc.value='';
        newCal.value='';
        ">Add</button>
      <p id="hidden" style="display:none">Please fill in all fields</p>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(food: string, description: string, calories: number) {
    if (food !== '' && description !== '' && calories > 0) {
      document.getElementById("hidden").style.display = "none";
      var newMealToAdd: Meal = new Meal(food, description, calories);
      this.newMealSender.emit(newMealToAdd);
    } else {
      document.getElementById("hidden").style.display = "inline";
    }
  }
}

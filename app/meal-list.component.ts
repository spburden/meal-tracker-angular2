import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "meal-list",
  template: `
    <label>Filter by Calories</label>
    <select (change)="onChangeCalories($event.target.value)">
      <option value="">All</option>
      <option value="high">500 or more</option>
      <option value="low">499 or less</option>
    </select>
    <h3>Meals Today:<h3>
    <div *ngFor="let currentMeal of childMealList | calorie:selectedCalories">
      <div class="well">
        <h4>Food: {{ currentMeal.food }}</h4>
        <h4>Description: {{ currentMeal.description }}</h4>
        <h4>{{ currentMeal.calories }} Calories</h4>
        <button class="btn btn-primary" (click)="editClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() showEditFormSender = new EventEmitter();
  @Output() showAddFormSender = new EventEmitter();
  editClicked(mealToEdit: Meal) {
    this.showEditFormSender.emit(mealToEdit);
  }
  public selectedCalories = "";
  onChangeCalories(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}

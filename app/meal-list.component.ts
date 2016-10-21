import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "meal-list",
  template: `
    <h3>Meals Today:<h3>
    <div *ngFor="let currentMeal of childMealList">
      <h4>{{ currentMeal.food }}</h4>
      <h4>{{ currentMeal.description }}</h4>
      <h4>{{ currentMeal.calories }} Calories</h4>
      <button class="btn btn-primary" (click)="editClicked(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() showEditFormSender = new EventEmitter();
  editClicked(mealToEdit: Meal) {
    this.showEditFormSender.emit(mealToEdit);
  }
}

import { Component } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div>
      <meal-list
        [childMealList] = "masterMealList"
        (showEditFormSender) = "showEditForm($event)"
      ></meal-list>
      <new-meal
        (newMealSender)="addMeal($event)"
      ></new-meal>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Burger and Fries", "Only ate half the fries", 870),
      new Meal("Chicken Caesar Salad", "Very good", 400)
  ];

  showList = true;
  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    console.log(newMealFromChild);
    this.masterMealList.push(newMealFromChild);
    console.log(this.masterMealList);
  }

  showEditForm(editMeal: Meal) {
    this.selectedMeal = editMeal;
    this.showList = false;
  }
}

import { Component } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
      <meal-list
        [childMealList] = "masterMealList"
        (showEditFormSender) = "showEditForm($event)"
      ></meal-list>
      <edit-meal
        [childSelectedMeal] = "selectedMeal"
        (finishedEditingSender) = "finishedEditing()"
        (deleteMealSender) = "deleteMeal()"
      ></edit-meal>
      <new-meal
        (newMealSender)="addMeal($event)"
      ></new-meal>
      <button (click)="add()" class="btn">Add</button>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Burger and Fries", "Only ate half the fries", 870),
      new Meal("Chicken Caesar Salad", "Very good", 400)
  ];

  // showMealList = true;
  // showAddForm = true;
  // addEditForm = true;

  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    console.log(newMealFromChild);
    this.masterMealList.push(newMealFromChild);
    console.log(this.masterMealList);
  }

  showEditForm(editMeal: Meal) {
    this.selectedMeal = editMeal;
  }

  add() {
  //   // this.showList = false;
  //   // this.showEdit = false;
  //   // this.showNew = true;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  deleteMeal() {
    var indexPosition = this.masterMealList.indexOf(this.selectedMeal);
    this.masterMealList.splice((indexPosition), 1);
  }
}

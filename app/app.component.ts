import { Component } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <div [hidden] = "!showMealList">
      <div class="jumbotron">
        <div class='title'>
          <h1>Wecome to Meal Tracker</h1>
        </div>
      </div>
        <meal-list
          [childMealList] = "masterMealList"
          (showEditFormSender) = "editForm($event)"
        ></meal-list>
        <button (click)="addForm()" class="btn btn-danger">Add Meal</button>
    </div>
    <div [hidden] = "!showEditForm">
      <edit-meal
        [childSelectedMeal] = "selectedMeal"
        (finishedEditingSender) = "finishedEditing()"
        (deleteMealSender) = "deleteMeal()"
      ></edit-meal>
    </div>
    <div [hidden] = "!showAddForm">
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

  showMealList = true;
  showAddForm = false;
  showEditForm = false;
  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
    this.showMealList = true;
    this.showAddForm = false;
  }

  addForm() {
    this.showMealList = false;
    this.showAddForm = true;
  }

  editForm(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
    this.showMealList = false;
    this.showAddForm = false;
    this.showEditForm = true;
  }

  finishedEditing() {
    this.selectedMeal = null;
    this.showMealList = true;
    this.showAddForm = false;
    this.showEditForm = false;
  }

  deleteMeal() {
    var indexPosition = this.masterMealList.indexOf(this.selectedMeal);
    this.masterMealList.splice((indexPosition), 1);
    this.showMealList = true;
    this.showAddForm = false;
    this.showEditForm = false;
  }
}

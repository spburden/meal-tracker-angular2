import { Component } from "@angular/core";
import { Meal } from './meal.model';

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <new-meal
    
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Burger and Fries", "Only ate half the fries", 870),
      new Meal("Chicken Caesar Salad", "Very good", 400),
  ];
}

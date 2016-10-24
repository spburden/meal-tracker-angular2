import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Meal } from "./meal.model";

@Component({
  selector: "edit-meal",
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Meal {{ childSelectedMeal.food }}</h3>
      <div class="form-group">
        <label>Food: </label>
        <input class="form-control" type="text" [(ngModel)]="childSelectedMeal.food">
      </div>
      <div class="form-group">
        <label>Description: </label>
        <input class="form-control" type="text" [(ngModel)]="childSelectedMeal.description">
      </div>
      <div class="form-group">
        <label>Calories: </label>
        <input class="form-control" type="number" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div class="form-group">
        <button (click)="finishedEditing()" class="btn btn-success">Done</button>
        <button (click)="deleteMeal()" class="btn btn-danger">Delete</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() finishedEditingSender = new EventEmitter();
  @Output() deleteMealSender = new EventEmitter();
  finishedEditing() {
    this.finishedEditingSender.emit();
  }
  deleteMeal() {
    this.deleteMealSender.emit();
  }
}

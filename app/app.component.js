"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.Meal("Burger and Fries", "Only ate half the fries", 870),
            new meal_model_1.Meal("Chicken Caesar Salad", "Very good", 400)
        ];
        this.showMealList = true;
        this.showAddForm = false;
        this.showEditForm = false;
        this.selectedMeal = null;
    }
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.masterMealList.push(newMealFromChild);
        this.showMealList = true;
        this.showAddForm = false;
    };
    AppComponent.prototype.addForm = function () {
        this.showMealList = false;
        this.showAddForm = true;
    };
    AppComponent.prototype.editForm = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
        this.showMealList = false;
        this.showAddForm = false;
        this.showEditForm = true;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
        this.showMealList = true;
        this.showAddForm = false;
        this.showEditForm = false;
    };
    AppComponent.prototype.cancel = function () {
        this.showMealList = true;
        this.showAddForm = false;
        this.showEditForm = false;
    };
    AppComponent.prototype.deleteMeal = function () {
        var indexPosition = this.masterMealList.indexOf(this.selectedMeal);
        this.masterMealList.splice((indexPosition), 1);
        this.showMealList = true;
        this.showAddForm = false;
        this.showEditForm = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <div class=\"container\">\n    <div [hidden] = \"!showMealList\">\n      <div class=\"jumbotron\">\n        <div class='title'>\n          <h1>Wecome to Meal Tracker</h1>\n        </div>\n      </div>\n        <meal-list\n          [childMealList] = \"masterMealList\"\n          (showEditFormSender) = \"editForm($event)\"\n        ></meal-list>\n        <button (click)=\"addForm()\" class=\"btn btn-danger\">Add Meal</button>\n    </div>\n    <div [hidden] = \"!showEditForm\">\n      <edit-meal\n        [childSelectedMeal] = \"selectedMeal\"\n        (finishedEditingSender) = \"finishedEditing()\"\n        (deleteMealSender) = \"deleteMeal()\"\n      ></edit-meal>\n    </div>\n    <div [hidden] = \"!showAddForm\">\n      <new-meal\n        (newMealSender) = \"addMeal($event)\"\n        (cancelSender) = \"cancel()\"\n      ></new-meal>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
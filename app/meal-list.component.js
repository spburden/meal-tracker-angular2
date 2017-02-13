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
var MealListComponent = (function () {
    function MealListComponent() {
        this.showEditFormSender = new core_1.EventEmitter();
        this.showAddFormSender = new core_1.EventEmitter();
        this.selectedCalories = "";
    }
    MealListComponent.prototype.editClicked = function (mealToEdit) {
        this.showEditFormSender.emit(mealToEdit);
    };
    MealListComponent.prototype.onChangeCalories = function (optionFromMenu) {
        this.selectedCalories = optionFromMenu;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "showEditFormSender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "showAddFormSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: "meal-list",
            template: "\n    <label>Filter by Calories</label>\n    <select (change)=\"onChangeCalories($event.target.value)\">\n      <option value=\"\">All</option>\n      <option value=\"high\">500 or more</option>\n      <option value=\"low\">499 or less</option>\n    </select>\n    <h3>Meals Today:<h3>\n    <div *ngFor=\"let currentMeal of childMealList | calorie:selectedCalories\">\n      <div class=\"well\">\n        <h4>Food: {{ currentMeal.food }}</h4>\n        <h4>Description: {{ currentMeal.description }}</h4>\n        <h4>{{ currentMeal.calories }} Calories</h4>\n        <button class=\"btn btn-primary\" (click)=\"editClicked(currentMeal)\">Edit</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map
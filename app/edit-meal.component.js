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
var EditMealComponent = (function () {
    function EditMealComponent() {
        this.finishedEditingSender = new core_1.EventEmitter();
        this.deleteMealSender = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.finishedEditing = function () {
        this.finishedEditingSender.emit();
    };
    EditMealComponent.prototype.deleteMeal = function () {
        this.deleteMealSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], EditMealComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditMealComponent.prototype, "finishedEditingSender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditMealComponent.prototype, "deleteMealSender", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            selector: "edit-meal",
            template: "\n    <div *ngIf=\"childSelectedMeal\">\n      <h3>Edit Meal {{ childSelectedMeal.food }}</h3>\n      <div class=\"form-group\">\n        <label>Food: </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"childSelectedMeal.food\">\n      </div>\n      <div class=\"form-group\">\n        <label>Description: </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"childSelectedMeal.description\">\n      </div>\n      <div class=\"form-group\">\n        <label>Calories: </label>\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"childSelectedMeal.calories\">\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"finishedEditing()\" class=\"btn btn-success\">Done</button>\n        <button (click)=\"deleteMeal()\" class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map
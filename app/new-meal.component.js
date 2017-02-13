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
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
        this.cancelSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.cancel = function () {
        this.cancelSender.emit();
    };
    NewMealComponent.prototype.addClicked = function (food, description, calories) {
        if (food !== "" && description !== "" && calories > 0) {
            document.getElementById("validation").style.display = "none";
            var newMealToAdd = new meal_model_1.Meal(food, description, calories);
            this.newMealSender.emit(newMealToAdd);
        }
        else {
            document.getElementById("validation").style.display = "inline";
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealSender", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "cancelSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: "new-meal",
            template: "\n    <h3>Record a new Meal</h3>\n    <div class=\"form-group\">\n      <label>Food: </label>\n      <input required class=\"form-control\" type=\"text\" #newFood>\n    </div>\n    <div class=\"form-group\">\n      <label>Description: </label>\n      <input required class=\"form-control\" type=\"text\" #newDesc>\n    </div>\n    <div class=\"form-group\">\n      <label>Calories: </label>\n      <input required class=\"form-control\" type=\"number\" #newCal>\n    </div>\n    <div>\n      <button class=\"btn btn-success\" (click)=\"\n        addClicked(newFood.value, newDesc.value, newCal.value);\n        newFood.value='';\n        newDesc.value='';\n        newCal.value='';\n        \">Add</button>\n      <button class=\"btn btn-danger\" (click)=\"cancel();\">Cancel</button>\n      <p id=\"validation\" style=\"display:none\">Please fill in all fields</p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map
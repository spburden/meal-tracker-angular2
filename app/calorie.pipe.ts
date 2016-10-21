import { Pipe, PipeTransform } from "@angular/core";
import { Meal } from "./meal.model";

@Pipe({
  name: "calorie",
  pure: false
})

export class MealCaloriePipe implements PipeTransform {
  transform(input: Meal[], calories: number) {
    var calorieSpecification = calories;
    var output: Meal[] = [];
    if (calorieSpecification === 500) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieSpecification === 499) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

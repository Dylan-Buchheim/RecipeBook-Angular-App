import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Chicken Tikka Masala", 
      "A dish that will make you cream.", 
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-jpg-1526059261.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cream', 4)
      ]
    ),
    new Recipe(
      "The Best Burger",
      "The best burger you will ever lay your tongue on.",
      "https://www.papercitymag.com/wp-content/uploads/2019/01/burger-hay-merchant.png",
      [
        new Ingredient('Meat', 5),
        new Ingredient('Buns', 2)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}

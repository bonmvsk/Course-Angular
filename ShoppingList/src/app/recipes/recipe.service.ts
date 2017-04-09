import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Portobello_Mushroom_Burger_at_Loving_Hut_Restaurant.jpg/640px-Portobello_Mushroom_Burger_at_Loving_Hut_Restaurant.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe(
            'Big Fat Berger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Big_Mac_hamburger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    /**
     *
     */
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
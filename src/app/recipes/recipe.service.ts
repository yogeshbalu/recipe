import { Recipe } from './recipe.model';

import{ EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Apple Shake', 
        'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Milk',1),
            new Ingredient('Apple',2)

        ]),
        new Recipe('Burger', 
        'This is simply a test',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
            new Ingredient('Meat',1),
            new Ingredient('Frech Fries',20)

        ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipies() {
        return this.recipes.slice();
    }

    addIngredientsToShoppigList(){
        
    }

    


}
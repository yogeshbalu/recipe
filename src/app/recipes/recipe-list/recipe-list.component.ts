import { Component, OnInit } from '@angular/core';
//import { NgxCarousel } from 'ngx-carousel';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
  }
/* 
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */





}

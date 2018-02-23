import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { NgxCarouselModule } from 'ngx-carousel'
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;


  public items: object[] = [];

  public carouselConfig: NgxCarouselModule;

  constructor(private recipeService: RecipeService) {
    this.items = [
      {
        title: '../../assets/images/slider/slide1.jpg',
        color: 'green'
      },
      {
        title: '../../assets/images/slider/slide2.jpg',
        color: 'blue'
      },
      {
        title: '../../assets/images/slider/slide3.jpg',
        color: 'blue'
      }
    ]

    this.carouselConfig = {
      grid: { xs: 1, sm: 1, md: 3, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 5000,
      point: {
        visible: true
      },
      loop: true,
      touch: true
    }
  }

  ngOnInit() {

    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

}

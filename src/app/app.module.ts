import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHeighlightDirective } from './basic-heighlight/basic-heighlight.directive';
import { BetterHeighlightDirective } from './better-heighlight/better-heighlight.directive';
import { BasicCondtionDirective } from './basic-condition/basic-condition.directive';
import { DropdownDirective } from './shared/drodpwon/dropdown.directive';
import { NgxCarouselModule } from 'ngx-carousel';
import {ShoppingListService} from './shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHeighlightDirective,
    BetterHeighlightDirective,
    BasicCondtionDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxCarouselModule
  ],
  providers:[ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

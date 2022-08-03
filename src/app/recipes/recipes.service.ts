import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id:'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1280px-Wiener-Schnitzel02.jpg',
      ingredients: ['French fries', 'Pork meat', 'Salad']
    },
    {
      id:'r2',
      title: 'Pasta',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Troffiette_genovese.jpg',
      ingredients: ['French fries', 'Pork meat', 'Salad']
    }
  ]
  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return this.recipes.find(x => x.id == recipeId)
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}

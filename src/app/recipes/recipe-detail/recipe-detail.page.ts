import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('AOOOOOOOOOOOOOOOOOOOOOOOOo')
    this.activatedRoute.paramMap.subscribe(z=>{
      if(!z.has('recipeId')){
        this.router.navigate(['/recipes'])
        return;
      }
      const recipedId = z.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipedId);
      console.log(recipedId);

    });
  }
  onDeleteRecipe(){
    this.alertCtrl.create({header: 'Are you sure?', message: 'Are you sure you want to delete this recipe?', buttons:[{
      text: 'Cancel',
      role: 'cancel'
    },{
      text: 'Delete',
      handler: () =>{
        this.recipeService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]}).then(alertEl=>{
      alertEl.present();
    });

  }

}

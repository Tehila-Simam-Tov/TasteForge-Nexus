import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipes/recipe.service';
import { Recipe } from '../../interface/recipeInterface';

@Component({
  selector: 'app-more-details',
  imports: [RouterLink],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {
  strimg: string = ""
  getRecip: Recipe = {
    recipeName: "",
    img: "",
    description: "",
    level: "",
    timeDuration: "",
    kind: "",

    components: [
      {
        name: "",
        amount: 0
      }],
    idUser: ""
  }
  constructor(private myactive: ActivatedRoute, private recipe: RecipeService) {

  }


  ngOnInit() {
    this.myactive.params.subscribe((r: any) => this.strimg = r.recipe)
    this.recipe.getRecipeById(this.strimg).subscribe(
      (data) => {
       // alert(data)
        this.getRecip=data
      }
      ,
      err => {
        console.log(err);
      }
    )
  }
}

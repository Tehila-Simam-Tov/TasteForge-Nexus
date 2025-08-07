
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../../interface/recipeInterface';
import { RecipeService } from '../../services/recipes/recipe.service';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  newRecipe: Recipe = {
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
  constructor(private r: RecipeService) { }

  addComponent() {
    
    this.newRecipe.components.push({ name: "", amount: 0 });
  }
  
addRecipe() {
  // Filter out empty components
  this.newRecipe.components = this.newRecipe.components.filter(component =>
      component.name.trim() !== "" && component.amount > 0
  );

  // Check if there is at least one valid component
  if (this.newRecipe.components.length === 0) {
      alert("You must add at least one valid component.");
      return; // Exit the function to prevent adding the recipe
  }

  this.r.addRecipe(this.newRecipe).subscribe(
      (data) => {
          alert("Recipe added successfully🙌");
      },
      err => {
          console.log(err);
          alert("You have a problem in the data: " + JSON.stringify(err));
      }
  );
}
 }

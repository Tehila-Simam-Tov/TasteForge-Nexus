import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipes/recipe.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listRecipes: Array<any> = new Array<any>()
  favoriteRecipes: Array<string> = new Array<any>() // רשימת מתכונים מועדפים
  constructor(private recipe: RecipeService, private u: UsersService) { }
  recipeObj: any = { 'recipe': "" }

  
  isFavorite(recipeName: string): boolean {
    return this.favoriteRecipes.includes(recipeName);
  }
  // קבלת המתכונים המועדפים של המשתמש

getFevoritRecips(id: string) {
  console.log("Fetching favorites for User ID: ", id);
  this.u.getLoveRecips(id).subscribe(
      (data: any) => {
          console.log("Raw Data from API: ", data); // Log the response
          if (Array.isArray(data)) {
              this.favoriteRecipes = data; // Ensure it's an array before assignment
          } else {
              console.warn("Unexpected data format:", data);
          }
      },
      err => {
          console.log("Error fetching favorite recipes: ", err);
      }
  );
  console.log(this.favoriteRecipes)
}


  toggleFavorite(recipeName: string) {
    this.recipeObj.recipe = recipeName
    if (this.u.isuser == false) {
      alert("כדי להוסיף את המתכון לרשימת המתכונים האהובים יש צורך להתחבר תחילה")
      return
    }
    if (this.isFavorite(recipeName)===true) {
      alert("no exist")
      this.u.deleteFromLoveRecips(this.u.idUser, this.recipeObj).subscribe(

        (data: any) => {
          alert(`המתכון ${recipeName} נמחק מרשימת המתכונים המועדפים שלך`)
        }
        ,
        err => {
          console.log(err);
        }
      )
    }

    else {
      this.u.addRecipeToFevorit(this.u.idUser, this.recipeObj).subscribe(

        (data: any) => {
          alert(`המתכון ${recipeName} נוסף לרשימת המתכונים המועדפים שלך`)
          alert(this.favoriteRecipes)
        }
        ,
        err => {
          console.log(err);
        }
      )
    
      
    }
    this.getFevoritRecips(this.u.idUser)
  }

  ngOnInit() {
    debugger
    this.recipe.getAllRecipes().subscribe(
      (data: Array<any>) => this.listRecipes = data,
      err => {
        console.log(err);
      }
    )
    this.getFevoritRecips(this.u.idUser)
  }

}

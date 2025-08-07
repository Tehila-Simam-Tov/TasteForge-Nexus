import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../interface/recipeInterface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url: string = "http://localhost:1234/recipes/"
  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.url}getAll`)
  }

  addRecipe(r:Recipe): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}add`,r)
  }
 getRecipeById(id:string) :Observable<Recipe>{
  return this.http.get<Recipe>(`${this.url}getById/${id}`)
 }
}

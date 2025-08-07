import { Routes } from '@angular/router';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '***', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'addRecipe', component:AddRecipeComponent},
    {path: 'moreDetails/:recipe', component:MoreDetailsComponent},
];

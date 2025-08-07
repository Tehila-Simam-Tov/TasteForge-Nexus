import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interface/userInterface';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userFind: User = {
    name: "",
    password: "",
    address: "",
    phone: "",
    isManager: false,
    favoriteRecipes: []
  }

  newUser: User = {
    name: "",
    password: "",
    address: "",
    phone: "",
    isManager: false,
    favoriteRecipes: []
  }

  numRecipe: number = 1
  constructor(private us: UsersService, private r: Router) { }

  send() {
    debugger
    this.us.getByNameAndPass(this.newUser.name, this.newUser.password).subscribe(
      (data: User) => {
        //  this.userFind=data
        if (!data) {
          if (this.newUser.name == "manager" && this.newUser.password == "1111")
            this.newUser.isManager = true
          this.us.addUser(this.newUser).subscribe((data) => {

            alert("You have registered successfully 😊,"
              + " you are being redirected to login.")
            this.userFind = this.newUser
          })
        }
        else {
          alert("You are registered 👍"
            + " you are being redirected to login.")
          this.userFind = data
        }
        this.r.navigate(['/login'])
      },

      err => {
        console.log(err);
        // this.userFind=this.newUser


      }
    )

  }
  nameOfRecipes() {
    for (let i = 0; i < this.numRecipe; i++) {
      this.newUser.favoriteRecipes.push()
    }
  }
}
 // alert(`${data},
            //   ${JSON.stringify(this.userFind)}
            //   `)
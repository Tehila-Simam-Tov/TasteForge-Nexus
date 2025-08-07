import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interface/userInterface';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private us: UsersService, private r: Router) { }
  name: string = ""
  pass: string = ""
  conect() {
    this.us.getByNameAndPass(this.name, this.pass).subscribe(
      (date_theUserThatFound: any) => {
        //  this.userFind=data
        if (!date_theUserThatFound) {
          alert("You are not registered, "
            + " you are being redirected to registration.")
          this.r.navigate(['/register'])
        }
        else {
          if (this.us.isuser)
            alert("You are online.")
          else {
            this.us.idUser = date_theUserThatFound._id
            this.us.isuser = true
            this.us.username = this.name
          }
        }


      },

      err => {
        console.log(err);

      }
    )
  }
}

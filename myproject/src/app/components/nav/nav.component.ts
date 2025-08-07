import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public us: UsersService) {

  }
  f1() {
    this.us.isuser = false
    this.us.username = ""
  }
}

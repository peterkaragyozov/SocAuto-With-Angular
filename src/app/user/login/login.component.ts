import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private userService: UserService,
    private router: Router
    ) { }

  login(username: string, password: string): void {
    this.userService.login(username, password);
    this.router.navigate(['/all-listings']);
  }

}

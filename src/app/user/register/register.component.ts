import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService) { }

  register(username: string, email: string, password: string): void {
    // this.userService.register(username, password);
  }

}

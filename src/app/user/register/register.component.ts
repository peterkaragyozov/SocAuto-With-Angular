import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ) { }

  register(form: NgForm): void {
    if (form.invalid) { return; }
    const { username, email, password } = form.value;
    this.userService.register({ username, email, password }).subscribe({
      next: () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/all-listings';
        this.router.navigate([redirectUrl]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}

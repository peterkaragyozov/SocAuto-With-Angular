import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  login(form: NgForm) {
    if (form.invalid) { return; }
    const { username, password } = form.value;
    this.userService.login({ username, password }).subscribe({
      next: () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/all-listings';
        this.router.navigate([redirectUrl]);
      },
      error: (err) => {
        alert("Wrong username or password! Try again.");
        console.log(err);
      },
    });
  }
}

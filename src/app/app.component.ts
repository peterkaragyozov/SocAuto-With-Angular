import { Component } from '@angular/core';
import { Options } from './shared/options'
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( userService: UserService ){
    const sessionToken =  localStorage.getItem('sessionToken');
    const result = sessionToken == null ? '': sessionToken;
    Options.options.headers['X-Parse-Session-Token'] = result;
    userService.getMyProfile().subscribe() ;
  }
  title = 'SocAuto';
}

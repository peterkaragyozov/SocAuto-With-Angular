import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';
import { Options } from '../shared/options'

const host = 'https://parseapi.back4app.com';



@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor( private http: HttpClient ) {
   }

  login(data: { username: string; password: string }) {

    var result = this.http.post<IUser>(host + '/login', data, Options.options);
    var test = result.pipe(tap((user) =>
    {
      this.user = user;
      Options.options.headers['X-Parse-Session-Token'] = user.sessionToken;
      localStorage.setItem('sessionToken', user.sessionToken);
    }
    
    ));
    return test;
  }

  register(data: { username: string; email: string; password: string }) {
    // sessionStorage.setItem('user', JSON.stringify(data));
    Options.options.headers['X-Parse-Session-Token'] = '';
    return this.http.post<IUser>(host + '/users', data, Options.options).pipe(tap((user) => {
      this.user = user;
      Options.options.headers['X-Parse-Session-Token'] = user.sessionToken;
      localStorage.setItem('sessionToken', user.sessionToken);
    }));
  }

  logout() {
    Options.options.headers['X-Parse-Session-Token'] = '';
    return this.http.post<IUser>(host + '/logout', {}, Options.options).pipe(tap(() => this.user = null));
  }
  
  getMyProfile() {
    var result = this.http.get<any>(host + '/users/me', Options.options);
    return result.pipe(tap((user) => 
    {
      this.user = user;
    }
    
    ));
  }
}

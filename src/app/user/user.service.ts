import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';

const host = 'https://parseapi.back4app.com';
const options = { 
  headers: {
    'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
    'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU',
    'X-Parse-Session-Token': ''
  },
  withCredentials: true
}


@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor( private http: HttpClient ) {

   }

  login(data: { username: string; password: string }) {
    return this.http.post<IUser>(host + '/login', data, options).pipe(tap((user) => this.user = user));
  }

  register(data: { username: string; email: string; password: string }) {
    return this.http.post<IUser>(host + '/users', data, options).pipe(tap((user) => this.user = user));
  }

  logout() {
    return this.http.post<IUser>(host + '/logout', {}, options).pipe(tap(() => this.user = null));
  }
  
  getMyProfile() {
    return this.http.get<IUser>(host + 'users/me', options).pipe(tap((user) => this.user = user));
  }
}

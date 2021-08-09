import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces/user';

const host = 'https://parseapi.back4app.com';
const headers = { 
  headers: {
    'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
    'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
  }
}

@Injectable()
export class UserService {

  user: IUser | null | undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) {

  }

  // constructor(
  //   @Inject(LocalStorage) private localStorage: Window['localStorage']
  //   ) {
  //   try {
  //     const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
  //     this.user = JSON.parse(localStorageUser);
  //   } catch {
  //     this.user = undefined;
  //   }
  // }

  login(data: { username: string; password: string }) {
    return this.http.post<IUser>(host + '/login', data, headers);
  }

  register(data: { username: string; email: string; password: string }) {
    return this.http.post(host + '/users', data, headers);
  }

  logout() {
    return this.http.post<IUser>(host + '/logout', {}, headers);
  }
}

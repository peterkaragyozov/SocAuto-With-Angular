import { Inject, Injectable } from '@angular/core';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class UserService {

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }

  login(email: string, password: string): void {
    this.user = {
      username: 'Peter',
      email: 'peter@gmail.com',
      password: '123456'
    }

    this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _username: string = '';
  private _userid: string = '';

  set username(value: string) {
    this._username = value;
  }

  get username(): string {
    return this._username;
  }

  set userid(value: string) {
    this._userid = value;
  }

  get userid(): string {
    return this._userid;
  }
}

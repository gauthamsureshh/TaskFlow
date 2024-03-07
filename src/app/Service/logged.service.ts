import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  private loggedUser:string;
  private username:string;
  private authToken:string;

  constructor() {
    this.loggedUser=localStorage.getItem('user');
    this.authToken=localStorage.getItem('token');
  }

  getLoggedUser():string{
    const parsedUser=JSON.parse(this.loggedUser);
    this.username=parsedUser.name;
    return this.username;
  }

  getToken():string{
    return this.authToken;
  }
}

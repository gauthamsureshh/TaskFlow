import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl='http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  registerUser(inputdata:any){
    const url=`${this.apiUrl}/${'register'}`;
    return this.http.post(url, inputdata);
  }
}

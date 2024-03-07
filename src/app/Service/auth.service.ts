import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl='http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  registerUser(inputdata:any):Observable<any>{
    const url=`${this.apiUrl}/${'register'}`;
    return this.http.post(url, inputdata);
  }
  loginUser(data:any):Observable<any>{
    const url=`${this.apiUrl}/${'login'}`;
    return this.http.post(url,data);
  }
}

import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor(private toastr:ToastrService, private auth:AuthService, private router:Router){}

  name:string='';
  email:string='';
  password:string='';

  register():void{
    const data={ name: this.name, email: this.email, password: this.password };
    this.auth.registerUser(data).subscribe((response)=>{
      if(response.token){
        this.toastr.success("Account Created Successfully..!")
        this.router.navigate(['/']);
      }
    },
    (error)=>{
      console.log(`error is${error.message}`);
    })
  }
  

  login():void{
    const credentials = { email: this.email, password: this.password };
    this.auth.loginUser(credentials).subscribe((response)=>{
      if(response.token){
        console.log(`token is ${response.token}`)
        this.toastr.success("Login Successful")
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['todo']);
      } 
    });
  }
}


//this.toastr.success("Registered Successfully");

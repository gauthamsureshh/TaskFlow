import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {

  constructor(private builder: FormBuilder,private toastr:ToastrService, private auth:AuthService, private router:Router){}

  registerForm=this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.required)
  });

  register(){
    if(this.registerForm.valid){
      this.auth.registerUser(this.registerForm.value).subscribe(res=>{
        this.toastr.success("Registered Successfully");
        this.router.navigate(['/']);
      });
    }
    else{
      alert('Enter Valid Data')
    }
  }

}
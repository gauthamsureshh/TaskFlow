import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { MainpageComponent } from './Component/mainpage/mainpage.component';
import { AuthenticationComponent } from './Auth/authentication/authentication.component';
import { checkauthGuard } from './Guard/checkauth.guard';






const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'auth',component:AuthenticationComponent},
  {path:'todo',component:MainpageComponent,canActivate:[checkauthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { MainpageComponent } from './Component/mainpage/mainpage.component';
import { AuthenticationComponent } from './Auth/authentication/authentication.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'todo',component:MainpageComponent},
  {path:'auth',component:AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

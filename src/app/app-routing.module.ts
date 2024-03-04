import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { MainpageComponent } from './Component/mainpage/mainpage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'todo',component:MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

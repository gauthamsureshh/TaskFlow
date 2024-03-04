import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { AddTaskComponent } from './Component/add-task/add-task.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { TasksComponent } from './Component/tasks/tasks.component';
import { TaskItemComponent } from './Component/task-item/task-item.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { MainpageComponent } from './Component/mainpage/mainpage.component';
import { AddComponent } from './Component/add/add.component';
import { AuthenticationComponent } from './Auth/authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    NavBarComponent,
    TasksComponent,
    TaskItemComponent,
    HomepageComponent,
    MainpageComponent,
    AddComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

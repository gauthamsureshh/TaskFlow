import { Component, OnInit} from '@angular/core';
import { LoggedService } from '../../Service/logged.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit{


loggedUser:any;  
constructor(private log:LoggedService){}
  ngOnInit(){
    this.loggedUser=this.log.getLoggedUser();
  }

  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}

import { Component,OnInit } from '@angular/core';
import { UIService } from '../../Service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  title = 'TaskFlow';
  showAddTask:boolean;
  subscription: Subscription;
  
  

  constructor(private uiService:UIService){
    this.subscription=this.uiService.onToggle().subscribe((value) =>(this.showAddTask= value))
    
  }
  ngOnInit(): void {
      
  }
  
  addTask(){
    this.uiService.toggleAddTask();
  }
}

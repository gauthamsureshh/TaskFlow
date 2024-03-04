import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UIService } from '../../Service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() onAddTask: EventEmitter<Task>= new EventEmitter();
  text:string;
  day:string;
  reminder:boolean=false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService : UIService){
    this.subscription=this.uiService.onToggle().subscribe((value) =>(this.showAddTask= value))
  }

  onSubmit(){
    if(!this.text){
      alert("Add Task")
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text='';
    this.day='';
    this.reminder=false;
  }

}

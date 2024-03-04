import { Component,Input,Output,EventEmitter } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input() text:string;
  @Input() color:string;
  @Output() btnClick=new EventEmitter();
  constructor(){}

  onClick(){
    this.btnClick.emit();
  }

}

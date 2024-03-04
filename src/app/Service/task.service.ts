import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';



const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl='http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    const url=`${this.apiUrl}/${'list'}`;
    return this.http.get<Task[]>(url);
  }

  deleteTask(task: Task): Observable<Task>{
    const url =`${this.apiUrl}/${'delete'}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url =`${this.apiUrl}/${'update'}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }

  addTask(task: Task):Observable<Task>{
    const url=`${this.apiUrl}/${'create'}`;
    return this.http.post<Task>(url,task,httpOptions);
  }

}

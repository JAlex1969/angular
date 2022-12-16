import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../Task';
import { Observable, observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL='http://localhost:5000/tasks';
  // private apiURL='http://localhost:63397/api/Task';

  getTasks(): Observable<Task[]>
  {
    console.log(this.http.get<Task[]>(this.apiURL));
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task:Task):Observable<Task> {
    const url=`${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task> {
    const url=`${this.apiURL}/${task.id}`;
    console.log(task);
    return this.http.put<Task>(url, task);
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiURL, task);
  }
  
  constructor(private http:HttpClient) { }
}
